import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css"

const Saving = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Savings Account</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 1</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Savings Account</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-up" className="saving-box1">
          <img src="https://i.ibb.co/84Cm9Wq/im-633687.jpg" alt="" />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>SAVINGS ACCOUNT</h3>
          <p>
          A savings account is a fundamental banking product that empowers
            individuals to securely deposit and grow their money while earning a
            modest interest rate.
          </p>
          <p>
            This account serves as a secure repository for
            funds and ensures easy access when needed, making it an ideal choice
            for short-term financial objectives like building an emergency fund,
            saving for a vacation, or creating a financial safety net.
          </p>
          <p>
          It also
            offers a convenient way to segregate and monitor funds, often with
            online and mobile banking options. Although the interest rates are
            relatively low compared to other investment options, the principal
            amount remains safe and readily available for withdrawals or
            transfers.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
       <Link to='/CreditCard' data-aos="fade-down">
       <img src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg" alt="" />
       <h4>Credit Card</h4>
       </Link>
       <Link to='/Checking' data-aos="zoom-in-up">
       <img src="https://i.ibb.co/2Y8Mdv9/cheque-650-400-650x400-71470323316.jpg" alt="" />
       <h4>Checking Account</h4>
       </Link>
       <Link to='/Business' data-aos="fade-up">
       <img src="https://i.ibb.co/yfC9W4v/lk-business-savings-account-400x-400y.jpg" alt="" />
       <h4>Business Account</h4>
       </Link>
        </span>
      </div>
      <div className="saving-container4">
        <CommentForm/>
      </div>
    </Fragment>
  );
};
export default Saving;
