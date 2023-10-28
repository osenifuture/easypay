import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css"

const HomeEquity = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Home Equity Lines of Credit (HELOCs)</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 2</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Home Equity Lines of Credit (HELOCs)</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img src="https://i.ibb.co/3NnG7jw/what-is-a-home-equity-line-of-credit-heloc.jpg" alt="" />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>HOME EQUITY LINES OF CREDIT</h3>
          <p>
          Home Equity Lines of Credit (HELOCs) offer homeowners a versatile financial resource by leveraging the equity in their homes. Unlike traditional loans, HELOCs provide a revolving line of credit, allowing homeowners to borrow as needed within their credit limit.
          </p>
          <p>
            This flexibility makes HELOCs an ideal choice for home improvements, debt consolidation, or unforeseen expenses. Interest rates are often lower than other types of loans, and the interest paid may be tax-deductible in some cases. 
          </p>
          <p>
          HELOCs empower homeowners to tap into the value of their property while retaining ownership, providing a financial safety net for various financial objectives and emergencies.
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
       <img src="https://i.ibb.co/FnFSHJc/CDs-vs-Savings-Accounts-composite-image.webp" alt="" />
       <h4>Certificates of Deposit </h4>
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
export default HomeEquity