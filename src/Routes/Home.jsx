import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./Home.css"
import HomeAutoType from "./HomeAutoType";
const Home  = () => {
    return(
        <Fragment>
        <div className="home-container1">
            <div className="home-container1-overlay">
                <h1>Great products with great rates:</h1>
                <span>
                <div className="home-span1">
                    <Link className="span1-link1">CD <p>1.05%APY**</p> </Link>
                    <Link className="span1-link2">MONEY MAKER <p>0.85%APY**</p> </Link>
                    <Link className="span1-link3">HIGH YIELD SAVING <p>0.90%APY**</p> </Link>
                    <Link className="span1-link4">IRA CD <p>1.15%APY**</p> </Link>
                </div>
                <div className="home-span2">
                   <HomeAutoType/>
                    <Link to='/Saving'>LET'S START WITH CDS <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                </span>
            </div>
        </div>
        <div className="home-container2">
            <div className="home-box1">
            <i className="fa-solid fa-stairs"></i>
            <span>
                <h3>Step Up your saving</h3>
                <p>See how with our CD Ladder tool</p>
            </span>
            </div>
            <div className="home-box1">
            <i className="fa-solid fa-shield-halved"></i>
            <span>
                <h3>Recent retail security breaches</h3>
                <p>Learn how we protect you</p>
            </span>
            </div>
            <div className="home-box1">
            <i className="fa-solid fa-mobile-retro"></i>
            <span>
                <h3>New features in mobile banking</h3>
                <p>Accessing Your Account is Easier</p>
            </span>
            </div>
            <div className="home-box1">
            <i className="fa-solid fa-percent"></i>
            <span>
                <h3>View our rates</h3>
                <p>Save more with us Saving & CD accounts</p>
            </span>
            </div>
        </div>
        <div className="home-container3">
            <div className="home-box2">
                <h1>PERSONAL BANKING</h1>
                <p>Our bank offers a comprehensive array of personal banking services designed to help individuals effectively manage their finances. These services encompass savings and checking accounts, loans, credit cards, and investment opportunities, all customized to address the unique financial requirements of our customers.</p>
                <Link><i className="fa-solid fa-caret-right"></i>Checking Account</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Savings account & CDS</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Debit, Credit, Prepaid & Gift Card</Link>
                <Link><i className="fa-solid fa-caret-right"></i>MB Residential Mortgage</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Loan</Link>
            </div>
            <div className="home-box2">
                <h1>BUSINESS BANKING</h1>
                <p>We provide a diverse set of financial services tailored for businesses. Our business banking offerings include business loans, merchant services, corporate accounts, and specialized financial solutions to support companies in managing their finances and achieving their growth objectives.</p>
                <Link><i className="fa-solid fa-caret-right"></i>Checking Accounts</Link>
                <Link><i className="fa-solid fa-caret-right"></i>MB Business Money Market Account</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Treasury Management</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Solutions for Growing Your Business</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Travel Tour Financing</Link>

            </div>
            <div className="home-box2">
            <h1>WEALTH MANAGEMENT</h1>
                <p>Wealth management is a specialized financial service that helps affluent individuals and families grow and protect their wealth. It involves investment advisory, financial planning, and asset allocation, aiming to achieve long-term financial goals and preserve wealth through a combination of strategies and investment vehicles.</p>
                <Link><i className="fa-solid fa-caret-right"></i>Private Banking</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Investments</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Personal Trust & Estate Service</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Instutional Trust & Retirement</Link>
                <Link><i className="fa-solid fa-caret-right"></i>Reseach and Commentary</Link>
            </div>
        </div>
        </Fragment>
    )
};

export default Home;