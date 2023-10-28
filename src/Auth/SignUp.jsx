import { createUserwithEandP, createUserDocRef, createGoogleUserAuth } from "../Context/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const defaultForm = {
    displayName: '',
    email: '',
    userName: '',
    password: '',
    phone: '',
    address: '',
    confirmPassword: ''
};

const SignUp = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    const [formField, setFormField] = useState(defaultForm);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { displayName, email, userName, password, confirmPassword, phone, address } = formField;
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const resetForm = () => {
        setFormField(defaultForm);
    };

    const handleSignIn = async () => {
        await createGoogleUserAuth();
        navigate('/')
    };

    // const handleSIGN = async () => {
    //     await createGooglruserAuth()
    //     navigate('/')
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        toast.success('User created successfully')
        if(password !== confirmPassword) {
                    setError("Wrong password!")
                } else if(password.length < 6  || confirmPassword.length < 6) {
                     setError('Weak password')
                } else {
                     console.log(formField)
                    setFormField(defaultForm)
               }
        try {
            const { user } = await createUserwithEandP(email, password);
            await createUserDocRef(user, displayName, userName, phone, confirmPassword, address);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
        resetForm();
        navigate('/');
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormField({ ...formField, [name]: value });
    };

    return (
        <div className="form-container">
            <h3 data-aos="fade-down">SIGN UP</h3>
            <p data-aos="fade-up">Register with us today</p>
            <form onSubmit={handleSubmit}>
                <input data-aos="fade-down" type="text" name="displayName" placeholder="Full Name" value={displayName} onChange={handleChange} required />
                <input data-aos="fade-up" type="email" name="email" placeholder="Enter Valid Email" value={email} onChange={handleChange} required />
                <input data-aos="fade-down" type="text" name="userName" placeholder="User Name" value={userName} onChange={handleChange} required />
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
                <div  data-aos="fade-down" className="pass">
                <input type={showConfirmPassword ? "text" : "Password"} name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange} required />
                <span onClick={handleShowConfirmPassword}>
                    {
                        showConfirmPassword ? (
                            <i className="fa-solid fa-eye-slash"></i>
                        ):(
                            <i className="fa-solid fa-eye"></i>
                        )}
                </span>
                </div>
                <input data-aos="fade-up" type="tel" name="phone" placeholder="Phone Number" value={phone} onChange={handleChange} required />
                <input data-aos="fade-down" type="text" name="address" placeholder="Address" value={address} onChange={handleChange} required />
                <button data-aos="fade-up" type="submit">{isLoading ? "Creating" : "Sign up"}</button>
                <p data-aos="fade-down" onClick={() => navigate('/')}>Member already! Login</p>
            </form>
            <button data-aos="fade-up" onClick={handleSignIn}>Sign-In with Google</button>
            {error && <p style={{color:'red', margin:'10px 0px'}}>{error}</p> }
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
    );
};

export default SignUp;
