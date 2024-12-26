import express from 'express';
import { sendMail } from '../controllers/sendMailController.js'; // Adjust the path as necessary
import { isTeacherAuthenticated } from '../middlewares/authmiddlewares.js';

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, text, html } = req.body;
    try {
        const info = await sendMail(to, subject, text, html);
        res.status(200).send({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).send({ message: 'Failed to send email', error });
    }
});

export default router;
