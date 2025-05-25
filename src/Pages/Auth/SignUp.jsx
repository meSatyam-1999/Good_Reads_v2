import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

 const [signUpDetails,setSignUpDetails]=useState({
        username: '',
        email: '',
        password: '',
    })

    function handleFormChange(e) {
        const {name, value} = e.target;
        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(signUpDetails);
    }


    return (
        <div className="main-container w-full flex flex-col items-center justify-center">
            <div className="mt-15">
                <h1 className="text-5xl text-white font-semibold">
                    Create a new account
                </h1>
            </div>
            
            

            <div className="mt-15 border-2 p-8 rounded-lg">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center">
                    {/* register form input box  */}
                   
                   {/* username input field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Name</legend>
                        <input name="username" onChange={handleFormChange} value={signUpDetails.username} type="text" className="input bg-white text-black w-80" placeholder="*Username" />
                    </fieldset>

                    {/* email input field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email</legend>
                        <input name="email" onChange={handleFormChange} value={signUpDetails.email} type="text" className="input bg-white text-black w-80" placeholder="*E-mail" />
                    </fieldset>

                    {/* password input field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input name="password" onChange={handleFormChange} value={signUpDetails.password} type="password" className="input bg-white text-black w-80" placeholder="*Password" />
                    </fieldset>

                    {/* Already have an account field */}
                    <div>
                        <p className="text-lg mt-5">Already have an account ? <button className="btn btn-active btn-warning text-black px-4 ml-3 w-20"><Link to="/login">Login</Link></button></p>
                    </div>


                        <button type="submit" className="btn btn-active btn-primary w-80 mt-6">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;