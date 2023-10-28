import "./Contact.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import ContactForm from "../Navigation/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <div className="contact-container1">
        <h3>Contact Us</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Contact</h4>
        </span>
      </div>
      <div className="contact-container2">
        <div className="contact-con1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252806.19088669974!2d4.400178494531239!3d8.091617400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037956999c6f577%3A0x8294d0d1343e8f2d!2sMicrofinance%20Bank!5e0!3m2!1sen!2sng!4v1698445871302!5m2!1sen!2sng"
            title="Google Maps"
            width="1500"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <span>
          <div className="contact-con2">
            <h1>GET IN TOUCH TODAY</h1>
            <p>
              Our banking services encompass a wide range of financial solutions
              to meet your needs. From basic savings and checking accounts to
              complex investment opportunities and loans, we provide a
              comprehensive suite of services.
            </p>
            <p>
              We offer convenient online and mobile banking, personalized
              financial advice, and secure transactions to help you manage your
              money, save for the future, and achieve your financial goals with
              confidence.
            </p>
          </div>
          <div className="contact-con3">
            <ContactForm />
          </div>
        </span>
      </div>
    </Fragment>
  );
};

export default Contact;
