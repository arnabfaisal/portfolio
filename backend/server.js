import express from "express"
import bodyParser from "body-parser"
import nodemailer from "nodemailer"
import cors from "cors"


import dotenv from 'dotenv';
dotenv.config();


const app = express() 

app.use(cors())
app.use(bodyParser.json())

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body 

    const trasnporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS
        }

    })


    try {
        await trasnporter.sendMail({
            from: email,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            text: message
        });
        res.status(200).json({success:true, messsage: "email sent successfully!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "email failed to send"})
    }
})


const PORT = 5000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))