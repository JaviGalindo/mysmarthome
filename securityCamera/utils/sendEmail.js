const config = require("../config/config");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(config.email.APIKey);

const fs = require("fs");

async function sendEmail({emailTo, title, imagePath}) {
	const content = fs.readFileSync(imagePath).toString("base64");
	const msg = {
		to: emailTo,
		from: config.email.from, 
		subject: title,
		html: "<strong>SecurityCamera has detected movement</strong>",
		attachments: [
			{
				content,
				filename: "detection.jpg",
			}

		]
	};
	await sgMail
		.send(msg);
		
}

module.exports = sendEmail;