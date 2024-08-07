import { Request, Response } from "express";
import User from "../models/User.model";
import { hashPassword } from "../utils/auth";
import Token from "../models/Token.model";
import { generateToken } from "../utils/token";

export class AuthController{

    static createAccount = async (req: Request, res: Response) => {
        try {
            const { password, email } = req.body;

            const userExist = await User.findOne({
                where: { email } // Corregir la búsqueda del usuario existente
            });

            if(userExist){
                const error = new Error('El usuario ya esta registrado');
                return res.status(409).json({error: error.message})
           }
           
            const user = new User(req.body);
            user.password = await hashPassword(password);

            const token = new Token()
            token.token = generateToken();
            token.userId = user.id;
            await Promise.allSettled([User.create(user), Token.create(token)])
            res.send(token.token);
            
        } catch (error) {
            console.log(error);
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

