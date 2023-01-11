const express = require("express");
var bodyParser = require('body-parser')
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, "../../dist")));

app.post("/send", (req, res) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PWORD,
        },
      });
    
      const mailOptions = {
        from: req.body.email,
        to: "lalasimsmods@gmail.com",
        subject: `Message from ${req.body.email}`,
        text: req.body.description,
        attachments: [
            {
                filename: req.body.file
            }
        ]
    }

      console.log(req.body)

    //  try {
    //    transporter.sendMail(mailOptions);
    //    res.send(JSON.stringify("success"));
    //  } catch (error) {
    //    res.send(JSON.stringify("error"));
    //  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


