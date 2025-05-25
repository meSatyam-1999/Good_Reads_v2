import Notfound from "../Assets/Images/notfound404.svg"


const NotFound = () => {
    return(
        <div className="flex justify-center items-center">
            <img className="w-[45%]" src={Notfound} alt="Not-found-image" />
        </div>
    )
}

export default NotFound;