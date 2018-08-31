//Define your transport using the nodemailer module
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, 
    secure: true,
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD
    }
});

module.exports = {
    sendMail: (email, subject, message, date) => {
        const mailOptions = {
            from: email,
            to: process.env.ADMIN_EMAIL,
            subject: subject,
            text: 'Someone Contacted You!',
            html: `<div style="background=lightblue">
                     <p>THis person messaged you ${email}</p>
                     <p>${message}</p>
                     <p>Time Sent: ${date}</p>
                   </div>`
        };
        transporter.sendMail(mailOptions, (err) => {
            if(err) console.log('Send Mail Error----------', err);
        })
    }
}
