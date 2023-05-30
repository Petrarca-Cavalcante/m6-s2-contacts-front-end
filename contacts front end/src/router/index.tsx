import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";

export const RoutesApp = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>

                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}