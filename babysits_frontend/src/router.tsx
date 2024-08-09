import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import UserType from "./pages/Registros/UserType";
import UserDirection from "./pages/Registros/UserDirection";
import UserChildren from "./pages/Registros/UserChildren";
import UserTypeOfCare from "./pages/Registros/UserTypeOfCare";
import UserCalendar from "./pages/Registros/UserCalendar";
import UserExtras from "./pages/Registros/UserExtras";

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>} index>
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