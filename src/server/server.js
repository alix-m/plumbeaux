const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../../dist")));

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri
);

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.post("/send", (req, res) => {

  const accessToken = oauth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken:  process.env.REFRESH_TOKEN,
      accessToken: accessToken
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "lalasimsmods@gmail.com",
    subject: `Message from ${req.body.email}`,
    text: req.body.description,
    attachments: [
      {
        filename: req.body.file,
      },
    ],
  };

    try {
      transporter.sendMail(mailOptions);
      res.send(JSON.stringify("success"));
   } catch (error) {
      res.send(JSON.stringify("error"));
    }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
