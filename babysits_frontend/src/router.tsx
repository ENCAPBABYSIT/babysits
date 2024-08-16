import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import UserType from "@/views/Registros/UserType";
import UserDirection from "@/views/Registros/UserDirection";
import UserChildren from "@/views/Registros/UserChildren";
import UserTypeOfCare from "@/views/Registros/UserTypeOfCare";
import UserCalendar from "@/views/Registros/UserCalendar";
import UserExtras from "@/views/Registros/UserExtras";
import Home from "@/views/Home";

export default function Router(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route  element={<AppLayout/>} >
                    <Route path="/" element={ <Home/> } index/>
                    {/* <Route path="/" element={<Home />} index /> */}
                </Route>
 
                <Route path="/signin" element={<AuthLayout/>}>
                    <Route element={<UserType/>} index/>
                    <Route path="direction" element={<UserDirection/>}/>
                    <Route path="UserChildren" element={<UserChildren/>}/>
                    <Route path="typeofcare" element={<UserTypeOfCare/>}/>
                    <Route path="calendar" element={<UserCalendar/>}/>
                    <Route path="extras" element={<UserExtras/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}