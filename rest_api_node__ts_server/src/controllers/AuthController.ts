import { Request, Response } from "express";
import User from "../models/User.model";

export class AuthController{

    static createAccount = async (req: Request, res: Response) => {
        try {
            const user = await User.create(req.body);
            res.send('cuenta creada correctamente, revisa tu email para confirmarla');
            
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

