import { Router } from "express";
import { body, param } from 'express-validator';
import { AuthController } from "../controllers/AuthController";
import { handleInputErrors } from "../middleware";

const router = Router();

router.get('/',)

router.post('/create-account',
    body('name')
        .notEmpty()
        .withMessage('El nombre del usuario no puede ir vacio'),
    body('lastname')
        .notEmpty()
        .withMessage('El apellido del usuario no puede ir vacio'),
    body('password')
        .isLength({min: 8}).withMessage('La contraseña es muy corta'),
    body('password_confirmation').custom((value, {req})=> {
        if(value !== req.body.password){
            throw new Error('las contraseñas no son iguales')
        }
        return true
    }),
    handleInputErrors,
    body('email')
        .isEmail().withMessage('Email no valido'), 
    handleInputErrors,
    AuthController.createAccount);

router.post('/confirm-account',
    body('token')
    .notEmpty().withMessage('El Token no puede ir vacio'),
    handleInputErrors,
    AuthController.confirmAccount
)

router.get('/',
    AuthController.getAllUsers)

router.get('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    AuthController.getUserById)

router.put('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    AuthController.updateUser)

router.patch('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    AuthController.updatePassword)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    AuthController.deleteUser)


export default router;