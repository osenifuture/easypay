import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Aos from "aos";
import "aos/dist/aos.css"

const defaultForm = {
  fullName: "",
  email: "",
  address: "",
  message: "",
};
const CommentForm = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    const [form, setForm] = useState(defaultForm);
    const { fullName, email, address,  message } = form;
    const [isLoading, setIsLoading] = useState(false);
  
    const resetForm = () => {
      setForm(defaultForm);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      toast.success('Comment Sent Successfully')
      try {
          const response = await fetch('https://getform.io/f/fdfca55a-3792-4c87-a800-a113cf0be379', {
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
          <h1 data-aos="zoom-in-up">LEAVE A COMMENT</h1>
          <div data-aos="fade-down" className="combination">
              <input type="text" name="fullName" placeholder="Fullname*" value={fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email (will not be published)*" value={email} onChange={handleChange} required/>
          </div>
          <input data-aos="fade-up" type="text" name="address" placeholder="Address*" value={address} onChange={handleChange}  required/>         
              <textarea data-aos="fade-down" name="message" placeholder="Your Comment*" value={message} required  onChange={handleChange}></textarea>
              <button data-aos="fade-up" disabled={isLoading} type="sumbit Comment">
                {
                  isLoading ? "Submitting...." : "SEND MESSAGE"
                }
              </button>
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
export default CommentForm;