"use strict";
var express = require("express");
var Router = express.Router;
var mailRouter = new Router();
var mailer = require("nodemailer");

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tanner@simpletonspeech.com',
        pass: 'SimpletonHeslo1420'
    }
});

mailRouter
    .route("/")
    .post(function (req, res) {
        var email = req.body;
        console.log("email ", email);
        let mailOptions = {
            from: "" + email.name + email.senderEmail, // sender address
            to: 'tanner@simpletonspeech.com', // list of receivers
            subject: `Message from Simpleton Site: ${email.name}`, // Subject line
            // text: email.text, // plain text body
            html: `<p>from: ${email.name} email: ${email.senderEmail}</p>
            <p>${email.text}</p>` // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.send(error);
            }
            res.send({success: true, message: `Message ${info.messageId} sent: ${info.response}`});
        });

    });

module.exports = mailRouter;