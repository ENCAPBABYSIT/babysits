import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Register from "./layout/Register";
 

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                </Route>
                <Route path="/toregister" element={<Register/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}