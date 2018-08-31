//import th emessage controller, and the nodemailer controller
const Message = require('../models/message');
const nodemailerCtrl = require('./nodemailer_controller');
module.exports = {
   contact: (req, res) => {
       //destruct email, subject and message from req.body
       const { email, subject, name, company_name, message } = req.body;
       const date = new Date().getUTCDate();
       const newMessage = {email, subject,  name, company_name, message, date};
        nodemailerCtrl.sendMail(email, subject,  name, company_name, message, date);
        Message.create(newMessage, (err, data) => {
            if(err) console.log('Create Message Error-----------', err);
            res.json({message: "Message Sent!!"}).end();
        })
   } 
}