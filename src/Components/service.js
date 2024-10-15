// server.js (Node.js Backend)
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Endpoint to handle email sending
app.post('/send-email', (req, res) => {
    const { registerNumber, fullName, phone, email, payFor, amount } = req.body;

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., Gmail, Outlook
        auth: {
            user: 'abarnadevi2705@gmail.com', // Replace with your email
            pass: '', // Replace with your email password (or app password if 2FA is enabled)
        },
    });

    // Email content
    const mailOptions = {
        from: 'abarnadevi2705@gmail.com',
        to: email, // Send email to the user
        subject: 'Payment Confirmation',
        text: `Hello ${fullName},

        Thank you for your payment of ${amount} for ${payFor}. 
        Your payment details are as follows:

        - Register Number: ${registerNumber}
        - Phone: ${phone}

        We appreciate your trust in our services.

        Regards,
        The Team`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
