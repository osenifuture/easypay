import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Checking = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Checking Account</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 1</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Checking Account</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img
            src="https://i.ibb.co/2Y8Mdv9/cheque-650-400-650x400-71470323316.jpg"
            alt=""
          />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>CHECKING ACCOUNT</h3>
          <p>
            Checking accounts are indispensable for everyday financial
            transactions. These accounts offer a range of features, including
            checkbooks and debit cards, enabling users to make payments
            seamlessly. Additionally,
          </p>
          <p>
            they come equipped with online and mobile banking services,
            facilitating effortless money management, balance checks, and bill
            payments. Checking accounts play a crucial role in personal finance
            by ensuring the availability of liquid funds for daily expenses.
          </p>
          <p>
            They are also a secure way to store money, often backed by FDIC
            insurance, protecting account holders from loss due to bank
            insolvency. Users can monitor their account activity, track
            spending, and set up direct deposits or automatic bill payments,
            making them an essential tool for financial convenience and
            security.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
          <Link to='/CreditCard' data-aos="fade-down">
            <img
              src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg"
              alt=""
            />
            <h4>Credit Card</h4>
          </Link>
          <Link to='/Personal' data-aos="zoom-in-up">
            <img
              src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp"
              alt=""
            />
            <h4>Personal Loan</h4>
          </Link>
          <Link to='/Business' data-aos="fade-up">
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
export default Checking;
