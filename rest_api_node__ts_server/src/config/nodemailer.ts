import nodemailer from 'nodemailer';

const config = () => {
    return {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "16c73396f8ed1e",
          pass: "f5fd47d44c91e3"
        }
    }
}

export const transporter = nodemailer.createTransport(config());

