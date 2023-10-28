import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css";

const AutoLoan = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Auto Loan</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 2</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Auto Loan</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img src="https://i.ibb.co/93m6wm9/car-financing-1.jpg" alt="" />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>AUTO LOAN</h3>
          <p>
            Auto loans are indispensable for individuals looking to purchase a
            vehicle, whether new or used. These loans come with various
            financing options, featuring either fixed or variable interest
            rates, depending on the lender and the borrower's creditworthiness.
          </p>
          <p>
            Borrower often have the choice of making a down payment to reduce
            the loan amount or using the vehicle as collateral. Down payments
            can affect the loan's overall cost and monthly payments.
          </p>
          <p>
            Auto loans make owning a car more accessible by spreading the cost
            over time, enabling individuals to drive their dream vehicle while
            managing their budget effectively. They are a practical solution for
            those who want reliable transportation without a hefty upfront
            expense.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
          <Link to="/Mortgage" data-aos="fade-down">
            <img
              src="https://i.ibb.co/SNdKZcs/finishing-successful-deal-real-estate-260nw-1414827998.webp"
              alt=""
            />
            <h4>Mortgage</h4>
          </Link>
          <Link to="/Personal" data-aos="zoom-in-up">
            <img
              src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp"
              alt=""
            />
            <h4>Personal Loan</h4>
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
export default AutoLoan;
