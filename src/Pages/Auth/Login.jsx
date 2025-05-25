import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {


    const [signInDetails,setSignInDetails]=useState({
        email: '',
        password: '',
    })

    function handleFormChange(e) {
        const {name, value} = e.target;
        setSignInDetails({
            ...signInDetails,
            [name]: value
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(signInDetails);
    }

    return(
        <div className="main-container w-full flex flex-col items-center justify-center">
            <div className="mt-15">
                <h1 className="text-5xl text-white font-semibold">
                    Login to your account
                </h1>
            </div>
            
            

            <div className="mt-15 border-2 p-8 rounded-lg">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center">
                    {/* register form input box  */}
    

                    {/* email input field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email</legend>
                        <input name="email" onChange={handleFormChange} value={signInDetails.email} type="text" className="input bg-white text-black w-80" placeholder="*E-mail" />
                    </fieldset>

                    {/* password input field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input name="password" onChange={handleFormChange} value={signInDetails.password} type="password" className="input bg-white text-black w-80" placeholder="*Password" />
                    </fieldset>

                    {/* Already have an account field */}
                    <div>
                        <p className="text-lg mt-5">Don't have an account ? <button className="btn btn-active btn-warning text-black px-4 ml-3 w-20"><Link to="/signup">Register</Link></button></p>
                    </div>


                        <button type="submit" className="btn btn-active btn-primary w-80 mt-6">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;