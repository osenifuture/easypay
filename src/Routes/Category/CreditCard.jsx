
import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css"

const CreditCard = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Credit Card</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 1</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Credit Card</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg" alt="" />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>CREDIT CARD</h3>
          <p>
          Credit cards are versatile financial tools that empower customers to make purchases on credit, granting them the flexibility to repay at a later date. These cards provide a revolving line of credit,
          </p>
          <p>
          meaning the available balance replenishes as the outstanding balance is paid off, making them suitable for both planned and unexpected expenses. Beyond convenience, credit cards frequently come with enticing perks such as rewards programs, cashback incentives, and travel benefits.
          </p>
          <p>
         These rewards can translate into discounts, free merchandise, or even complimentary travel services. However, it's crucial for cardholders to manage their credit responsibly, as failing to do so can result in high-interest charges and debt accumulation.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
       <Link to='/Personal' data-aos="fade-down">
       <img src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp" alt="" />
       <h4>Personal Loan</h4>
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
export default CreditCard;