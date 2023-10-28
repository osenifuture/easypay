import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Business = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Business Account</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 2</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Business Account</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img
            src="https://i.ibb.co/yfC9W4v/lk-business-savings-account-400x-400y.jpg"
            alt=""
          />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>BUSINESS ACCOUNT</h3>
          <p>
            Business accounts are indispensable for enterprises, addressing
            their diverse financial requirements. These accounts encompass
            business checking accounts, facilitating seamless day-to-day
            transactions, and can also include business loans, which provide
            necessary capital for expansion or working capital needs.
          </p>
          <p>
            Moreover, they often incorporate merchant services, enabling
            companies to accept various payment methods. These accounts are
            highly customizable, allowing businesses to access tailored
            solutions for their unique needs.
          </p>
          <p>
            From managing operational expenses to securing funds for growth,
            business accounts are crucial tools for effective financial
            management, helping companies streamline their finances and achieve
            their objectives.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
          <Link to='/HomeEquity' data-aos="fade-down">
            <img
              src="https://i.ibb.co/3NnG7jw/what-is-a-home-equity-line-of-credit-heloc.jpg"
              alt=""
            />
            <h4>Home Equity (HELOCs)</h4>
          </Link>
          <Link to="/Checking" data-aos="zoom-in-up">
            <img
              src="https://i.ibb.co/2Y8Mdv9/cheque-650-400-650x400-71470323316.jpg"
              alt=""
            />
            <h4>Checking Account</h4>
          </Link>
          <Link to='/AutoLoan' data-aos="fade-up">
            <img src="https://i.ibb.co/93m6wm9/car-financing-1.jpg" alt="" />
            <h4>Auto Loan</h4>
          </Link>
        </span>
      </div>
      <div className="saving-container4">
        <CommentForm />
      </div>
    </Fragment>
  );
};
export default Business;
