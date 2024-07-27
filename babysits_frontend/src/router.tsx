import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Register from "./layout/Register";
import UserType from "./pages/Registros/UserType";
 

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>} index>
                </Route>

                <Route path="/toregister" element={<Register/>}>
                    <Route path="/typeUser" element={<UserType/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}