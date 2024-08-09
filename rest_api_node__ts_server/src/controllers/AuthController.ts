import { Request, Response } from "express";
import User from "../models/User.model";
import { checkPassword, hashPassword } from "../utils/auth";
import Token from "../models/Token.model";
import { generateToken } from "../utils/token";
import { AuthEmail } from "../email/AuthEmail";
import { check } from "express-validator";
export class AuthController{

    static createAccount = async (req: Request, res: Response) => {
        try {
            const { password, email } = req.body;

            const userExist = await User.findOne({
                where: { email } 
            });

            if (userExist) {
                const error = new Error('El usuario ya está registrado');
                return res.status(409).json({ error: error.message });
            }

            const user = new User(req.body);
            user.password = await hashPassword(password);

            // Primero guarda el usuario para que tenga un ID
            await user.save();

            // Luego crea y guarda el token con el userId correcto
            const token = new Token();
            token.token = generateToken();
            token.userId = user.id;

            AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.name,
                token: token.token
            })

            await token.save();

            res.send(token.token);

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error en la creación de la cuenta' });
        }
    }

    static confirmAccount = async (req: Request, res:Response) => {
        try{
            const { token } = req.body

            const tokenExist = await Token.findOne({
                where: { token } 
            });

            if(!tokenExist){
                const error = new Error('Token no valido');
                return res.status(401).json({error: error.message})
            }

            const user = await User.findByPk(tokenExist.userId);
            user.confirmed = true;

            await user.save();
            await tokenExist.destroy();

            res.send('Cuenta confirmada correctamente');
            
        }catch(error){
            res.status(500).json({error: 'Hubo un Error'});
        }
    }

    static login = async (req: Request, res:Response) => {
        try{

            const {email, password} = req.body;
            const user = await User.findOne({
                where: { email } 
            });

            if(!user){
                const error = new Error('Usuario no encontrado');
                return res.status(401).json({error: error.message});
            }

            if(!user.confirmed){
                const token = new Token();
                token.userId = user.id;
                token.token = generateToken();
                await token.save();

                //enviar el email
                AuthEmail.sendConfirmationEmail({
                    email: user.email,
                    name: user.name,
                    token: token.token
                })

                const error = new Error('La cuenta aún no ah sido confirmada, hemos enviado un mensaje a su correo de confirmación');

                return res.status(401).json({error: error.message});
            }

            //Revisar contraseña
            const isPasswordCorrect = await checkPassword(password, user.password);
            if(!isPasswordCorrect){
                const error = new Error('Contraseña Inorrecta');
                return res.status(401).json({error: error.message});
            }
            
            res.send
            
        }catch(error){
            res.status(500).json({error: 'Hubo un Error'});
        }
    }



    
    static getAllUsers = async (req: Request, res: Response) => {
        try {
            const user = await User.findAll({
                order: [
                    ['id', 'DESC']
                ],
                attributes: {exclude: ['password']}
            });
            res.json({data: user})
    
        } catch (error) {
            console.log(error)
        }
        
    }
    
    static getUserById = async (req: Request, res: Response) => {
    
        try {  
            const {id} = req.params;
            const user = await User.findByPk(id);
    
            if(!user){
                const error = new Error('Usuario no encontrado')
                return res.status(400).json({errors: error.message})
            }
    
            res.json({data: user});
    
        } catch (error) {
            console.log(error)
        }
    
    }
    
    static updateUser = async (req: Request, res: Response) => {
    
        try {  
            const {id} = req.params;
            const user = await User.findByPk(id);
    
            if(!user){
                return res.status(404).json({
                    error : "Usuario no encontrado"
                })
            }
    
            await user.update(req.body);
            await user.save();
    
            res.json({data: user});
    
        } catch (error) {
            console.log(error)
        }
    
        //Update
    }
    
    static updatePassword = async (req:Request, res:Response) => {
        try {  
            const {id} = req.params;
            const user = await User.findByPk(id);
    
            if(!user){
                return res.status(404).json({
                    error : "Usuario no encontrado"
                })
            }
    
            user.password = req.body.password;
            await user.save();
    
            res.json({data: user});
    
        } catch (error) {
            console.log(error)
        }
    }
    
    static deleteUser = async (req: Request, res: Response) => {
        
        const {id} = req.params;
    
        const user = (await User.destroy({
            where: {
                id: id,
            },
        }));
    
        if(!user){
            const error = new Error('Usuario no encontrado')
            return res.status(400).json({errors: error.message})
        }
    
        res.json({data: user});
    }
    
}

