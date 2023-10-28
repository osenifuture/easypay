import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInWithEandP } from "../Context/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Aos from "aos";
import "aos/dist/aos.css"

const defaultForm = {
    email: '',
    password: ''
}

const LogIn = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    const [formField, setFormField] = useState(defaultForm);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false)
    const {email, password} = formField;
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const resetForm = () => {
        setFormField(defaultForm)
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        toast.success('Log in  Successfully')
        try {
            await SignInWithEandP(email, password)
            resetForm()
            navigate('/')
        } catch (error) {
            setError(error.message)
            console.log(error.message)
            alert(error.message)
        }
    };

    const handleNav = () => {
        navigate("/SignUp")
    }

    const handleChange = (e) => {
        const {name, value} = e.target 
        setFormField({...formField, [name] : value})
    }

    return(
        <div className="form-container">
        <h3 data-aos="fade-down">SIGN IN</h3>
            <p data-aos="fade-up">Welcome Back!</p>
        <form onSubmit={handleSubmit}>
            <input data-aos="fade-down" type="email" name="email" placeholder="Enter A Valid Email" value={email} onChange={handleChange} required/>
            <div  data-aos="fade-up" className="pass">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={password} onChange={handleChange} required />
                <span onClick={handleShowPassword}>
                    {
                        showPassword ? (
                            <i className="fa-solid fa-eye-slash"></i>
                        ):(
                            <i className="fa-solid fa-eye"></i>
                        )}
                </span>
                </div>
            <button data-aos="fade-up">{isLoading ? "Authenticate...." : "Log in"}</button>
            <p data-aos="fade-ddown" onClick={handleNav}>
                Not register yet? SignUp
            </p>
            {error && <p style={{color:'red', margin:'10px 0px'}}>{error}</p> }
        </form>
        <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        closeOnClick={true}
                        pauseOnHover={true}
                        draggable={true}
                        progress={undefined}
                        theme="light"
                        />
        </div>
    )


    
};
export default LogIn;