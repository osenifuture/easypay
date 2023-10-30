
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Aos from "aos";
import "aos/dist/aos.css"

const defaultForm = {
  fullName: "",
  email: "",
  Phone: "",
  message: "",
};
const ContactForm = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    const [form, setForm] = useState(defaultForm);
    const { fullName, email, phone,  message } = form;
    const [isLoading, setIsLoading] = useState(false);
  
    const resetForm = () => {
      setForm(defaultForm);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      toast.success('Form Sent Successfully')
      try {
          const response = await fetch('https://getform.io/f/c7e042e9-60db-44e8-ace3-a3342ce6d287', {
              method: 'POST',
              headers: {
                  "Content-Type" : "application/json"
              },
              body: JSON.stringify(form)
          });
          const responseData = await response.json();
          if(!response.ok) {
              throw new Error(responseData.message)
          }
          console.log(form)
          resetForm()
      } catch (error) {
        setIsLoading(false)
          console.log(error.message)
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} >
          <h1 data-aos="zoom-up">CONTACT FORM</h1>
          <div data-aos="fade-down" className="combination">
              <input type="text" name="fullName" placeholder="Full Name" value={fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email " value={email} onChange={handleChange} required/>
          <input type="number" name="phone" placeholder="Phone Number" value={phone} onChange={handleChange}  required/>         
          </div>
              <textarea data-aos="fade-down" name="message" placeholder="Message" value={message} required  onChange={handleChange}></textarea>
          <span>
              <button data-aos="fade-down" onClick={resetForm}>CLEAR FORM</button>
              <button data-aos="fade-up" disabled={isLoading} type="sumbit Comment">
                {
                  isLoading ? "Submitting...." : "SEND MESSAGE"
                }
              </button>
          </span>
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
        </form>

    );
};
export default ContactForm;