import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // use your email provider
    auth: {
        user: 'masihmuhammadi303@gmail.com', // your email address
        pass: 'efae anuq zilk rmpz'   // your email password or app-specific password
    }
});

// Function to send email
const sendMail = (to, subject, text, html) => {
    const mailOptions = {
        // from: 'masihullah@aseelapp.com', // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
        html // html body
    };

    return transporter.sendMail(mailOptions);
};

export { sendMail };
