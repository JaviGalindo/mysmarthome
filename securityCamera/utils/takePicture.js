const { StillCamera } = require("pi-camera-connect");
const fs = require("fs");
const stillCamera = new StillCamera();
const takePicture = async () => {
	try {
		console.log("Taking picture");
		const image = await stillCamera.takeImage();

		fs.writeFileSync("./public/still-image.jpg", image);
		return true;
        
        
	} catch (error) {
		console.error(error);
		return false;
	}
};

module.exports = takePicture;