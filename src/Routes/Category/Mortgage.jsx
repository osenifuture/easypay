import { Link } from "react-router-dom";
import "./Saving.css";
import { Fragment, useEffect } from "react";
import CommentForm from "./CommentForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Mortgage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="saving-container1">
        <h3>Mortgage</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Category 3</h4>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Mortgage</h4>
        </span>
      </div>
      <div className="saving-container2">
        <div data-aos="zoom-in-up" className="saving-box1">
          <img
            src="https://i.ibb.co/SNdKZcs/finishing-successful-deal-real-estate-260nw-1414827998.webp"
            alt=""
          />
        </div>
        <div className="saving-box2">
          <p>Date: 07/07/2012</p>
          <h3>Mortgage</h3>
          <p>
            Mortgages are long-term financial agreements commonly employed to
            facilitate the acquisition of real estate properties, primarily
            homes. These arrangements encompass a broad spectrum of terms and
            conditions, including diverse interest rates, which can be fixed or
            variable.
          </p>
          <p>
            Additionally, mortgages usually mandate a down payment, which serves
            as an initial, upfront contribution towards the property's cost. The
            down payment percentage can vary but often falls within a range of
            3% to 20% of the property's purchase price.
          </p>
          <p>
            Mortgages are structured to span over an extended period, commonly
            15 to 30 years, during which borrowers make monthly payments towards
            both principal and interest, eventually achieving full property
            ownership.
          </p>
        </div>
      </div>
      <div className="saving-container3">
        <h1>RELATED PRODUCTS</h1>
        <span>
          <Link to="/Personal" data-aos="fade-down">
            <img
              src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp"
              alt=""
            />
            <h4>Personal Loan</h4>
          </Link>
          <Link to="/AutoLoan" data-aos="zoom-in-up">
            <img src="https://i.ibb.co/93m6wm9/car-financing-1.jpg" alt="" />
            <h4>Auto Loan</h4>
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
export default Mortgage;
