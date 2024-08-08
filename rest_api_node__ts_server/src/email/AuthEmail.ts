import {transporter} from "../config/nodemailer";

interface IEmail{
    email:string
    name:string
    token:string
}

export class AuthEmail{
    static sendConfirmationEmail = async(user : IEmail ) => {
        await transporter.sendMail({
            from: 'Uptask <admin@babysitters.com>',
            to: user.email,
            subject: 'Confirma tu cuenta en BABYSITTER',
            text: 'BabySitter - Confirma tu Cuenta',
            html: `<p>Hola: ${user.name} Haz creado tu cuenta en BabySitters, solo debes confirmar tu cuenta</p>
                    <p>Visita el siguiente enlace:</p>
                    <a href="">Confirma tu cuenta</a>
                    <p>Ingrese el codigo: <b>${user.token}</b></p>
                    <p>Este codigo expira en 10 minutos</p>`

                
        })
    }
}