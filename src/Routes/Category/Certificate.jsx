import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Certificate = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Certificates of Deposit (CDs)</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 3</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Certificates of Deposits (CDs)</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img
            src="https://i.ibb.co/FnFSHJc/CDs-vs-Savings-Accounts-composite-image.webp"
            alt=""
          />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>CERTIFICATE OF DEPOSITS (CDs)</h3>
          <p>
            Certificates of Deposit (CDs) represent a low-risk investment option
            where individuals deposit a sum of money with a bank or financial
            institution for a predetermined duration, typically spanning from
            several months to several years.
          </p>
          <p>
            In return for locking in their funds for this agreed-upon period,
            investors receive a higher interest rate compared to standard
            savings accounts. The interest rate is fixed, providing stability in
            a fluctuating market. The longer the term of the CD, the higher the
            interest rate tends to be.
          </p>
          <p>
            While CDs offers security and a guaranteed return on investment,
            they come with the drawback of limited access to the deposited funds
            until the maturity date, making them more suitable for those with a
            long-term savings objective.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
          <Link to="/CreditCard" data-aos="fade-down">
            <img
              src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg"
              alt=""
            />
            <h4>Credit Card</h4>
          </Link>
          <Link to="/Checking" data-aos="zoom-in-up">
            <img
              src="https://i.ibb.co/2Y8Mdv9/cheque-650-400-650x400-71470323316.jpg"
              alt=""
            />
            <h4>Checking Account</h4>
          </Link>
          <Link to="/Business" data-aos="fade-up">
            <img
              src="https://i.ibb.co/yfC9W4v/lk-business-savings-account-400x-400y.jpg"
              alt=""
            />
            <h4>Business Account</h4>
          </Link>
        </span>
      </div>
      <div className="saving-container4">
        <CommentForm />
      </div>
    </Fragment>
  );
};
export default Certificate;
