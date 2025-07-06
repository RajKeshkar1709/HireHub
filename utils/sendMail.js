const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "rajkeshkar1709@gmail.com",
    pass: "fckk uhja mnhk xxrv",
  },
})

const sendMail = ({ to, subject, text, from = "rajkeshkar1709@gmail.com" }) => {
  return transporter.sendMail({
    from,
    to,
    subject,
    text
  });
};

module.exports = sendMail;
