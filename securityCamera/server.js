const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const {setSubscription} = require("./utils/subscriptionData");
const { simulateMotion } = require("./utils/fakeCamera");
const {VAPID, cameraServer} = require("./config/config");

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let subscription;

app.get("/health-check", (req, res) => {
	res.status(200).send("ok");
});

app.post("/notifications/subscribe", (req, res) => {
	subscription =  req.body;
	console.log("Subscription", subscription);
	setSubscription(subscription);

	res.status(200).json({ "success": true });
});

app.post("/notifications/send", (req, res) => {
	if (subscription) {
		console.log("Sending notification in server");
		const {title} = req.body;
		const payload = JSON.stringify({
			title,
			image: "./image.jpg"
		});
		
	}

	res.status(200).json({ "success": true });
});

app.get("/simulateMotion", async (req, res)=>{
	try {
	await simulateMotion();
		res.status(200).send("Notification sent");
	} catch (error) {
		console.error("Unexpected error simulating motion", error)
		res.status(500).send("Error in Camera server")
	}
});
app.listen(cameraServer.port, () => console.log(`The server has been started on the port ${cameraServer.port}`));