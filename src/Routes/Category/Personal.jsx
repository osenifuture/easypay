import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Personal = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Personal Loans</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 3</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Personal Loans</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img
            src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp"
            alt=""
          />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>PERSONAL LOANS</h3>
          <p>
            Personal loans are versatile financial tools, offering borrowers
            access to a lump sum of money without the need for collateral. They
            are often used for various purposes, including consolidating
            high-interest debt, funding home improvement projects, covering
            emergency expenses, or even financing a vacation.
          </p>
          <p>
            These loans typically come with fixed interest rates, which means
            the interest remains the same over the loan's repayment term.
            Repayment terms for personal loans can vary, but they usually range
            from two to seven years.
          </p>
          <p>
            Borrowers make regular monthly payments to repay the loan, gradually
            reducing the principal amount. The accessibility and flexibility of
            personal loans make them a popular choice for those seeking to
            address immediate financial needs or achieve specific goals.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
          <Link to="/AutoLoan" data-aos="fade-down">
            <img src="https://i.ibb.co/93m6wm9/car-financing-1.jpg" alt="" />
            <h4>Auto Loans</h4>
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
export default Personal;
