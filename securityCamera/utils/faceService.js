const path = require("path");
const fs = require("fs");

const tf = require("@tensorflow/tfjs-node");

const faceapi = require("@vladmandic/face-api");
const modelPathRoot = "../models";

let optionsSSDMobileNet;

async function image(file) {
	const decoded = tf.node.decodeImage(file);
	const casted = decoded.toFloat();
	const result = casted.expandDims(0);
	decoded.dispose();
	casted.dispose();
	return result;
}

async function detect(tensor) {
	const result = await faceapi.detectAllFaces(tensor, optionsSSDMobileNet);
	return result;
}

async function main(imagePath) {
	console.log("FaceAPI single-process test");
	const imageData = fs.readFileSync(imagePath);

	await faceapi.tf.setBackend("tensorflow");
	await faceapi.tf.enableProdMode();
	await faceapi.tf.ENV.set("DEBUG", false);
	await faceapi.tf.ready();

	console.log(
		`Version: TensorFlow/JS ${faceapi.tf?.version_core} FaceAPI ${
			faceapi.version.faceapi
		} Backend: ${faceapi.tf?.getBackend()}`
	);

	console.log("Loading FaceAPI models");
	// eslint-disable-next-line no-undef
	const modelPath = path.join(__dirname, modelPathRoot);
	await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath);
	optionsSSDMobileNet = new faceapi.SsdMobilenetv1Options({
		minConfidence: 0.5,
	});

	const tensor = await image(imageData);
	const result = await detect(tensor);
	console.log("Detected faces:", result.length);

	tensor.dispose();

	return result;
}

module.exports = {
	detect: main,
};