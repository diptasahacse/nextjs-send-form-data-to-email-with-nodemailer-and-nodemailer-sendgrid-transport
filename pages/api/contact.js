
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
const {SG_API_KEY} = process.env;
const options = {
    auth: {
        api_key: SG_API_KEY
    }
}
const mailer = nodemailer.createTransport(sgTransport(options));


export default async (req, res) => {
    const { email, phone, message } = req.body;
    console.log(email, phone, message)

    const data = {
        // Update your email here
        to: ["diptasaha.flexfog@gmail.com"],
        from: email,
        phone: phone,
        message: message,
    };

    try {
        const response = await mailer.send(data);
        console.log(response);
        return res.status(200).send("Email send successfully");
    }
    catch (error) {
        console.log(error)
        return res.status(500).send("Error proccessing charge");
    }

}

