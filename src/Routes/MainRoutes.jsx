import { Route, Routes } from "react-router-dom"
import NotFound from "../Pages/NotFound"
import About from "../Pages/About"
import Home from "../Pages/Home"

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};