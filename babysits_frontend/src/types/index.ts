import {z} from 'zod';

//Auth Users
const authSchema = z.object({
    name: z.string(),
    lastname: z.string(),
    email: z.string(),
    password: z.string(),
    password_confirmation: z.string()
})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password' >
export type UserRegistrationForm = Pick<Auth, 'email' | 'name' |'lastname' | 'password' | 'email' | 'password' | 'password_confirmation'>