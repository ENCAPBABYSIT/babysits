import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
 

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}