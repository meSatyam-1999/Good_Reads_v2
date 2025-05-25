import { Route, Routes } from "react-router-dom"
import NotFound from "../Pages/NotFound"
import About from "../Pages/About"
import Home from "../Pages/Home"
import SignUp from "../Pages/Auth/SignUp"
import Login from "../Pages/Auth/Login"

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};