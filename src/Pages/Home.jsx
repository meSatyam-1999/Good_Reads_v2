import { Link } from "react-router-dom";
import Logo from "../Assets/Images/book.png"

const Home = () => {
    return(
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="h-40 w-40">
                <img className="w-f h-full" src={Logo} alt="Logo-image" />
            </div>
            <h1 className="text-8xl font-bold font-serif mt-4 text-amber-400">Bookio.in</h1>
            <span className="text-2xl mt-2">#Just one more chapter.</span>
            <div className="mt-10">
               <Link to="/login"><button className="btn btn-active btn-primary w-40 m-5">Login</button></Link> 
                <Link to="/signup"><button className="btn btn-active btn-warning w-40 text-black font-semibold">Register</button></Link>
            </div>
        </div>
    )
}

export default Home;