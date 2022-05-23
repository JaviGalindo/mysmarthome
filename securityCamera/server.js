const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const {setSubscription} = require("./utils/subscriptionData");
const { simulateMotion } = require("./utils/fakeCamera");
const {cameraServer} = require("./config/config");
const axios = require("axios");
const { api, port } = require("./config/config").APPServer;

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let subscription;

app.get("/health-check", (req, res) => {
	res.status(200).send("ok");
});

app.post("/notifications/subscribe", async (req, res) => {
	try{
		subscription =  req.body;
		console.log("Subscription", subscription);
		setSubscription(subscription);
		await axios.post(`${api}:${port}/notifications/saveAuth/1`, {
			subscriptionAuth: subscription.keys.auth
		});

		res.status(200).json({ "success": true });
	}catch(error){
		console.error("Unexpected error subscribing push", error);
		res.status(500).send("Unexpected error subscribing push");
	}
});

app.get("/simulateMotion", async (req, res)=>{
	try {
		await simulateMotion();
		res.status(200).send("Motion simulated");
	} catch (error) {
		console.error("Unexpected error simulating motion", error);
		res.status(500).send("Error in Camera server");
	}
});
app.listen(cameraServer.port, () => console.log(`The server has been started on the port ${cameraServer.port}`));