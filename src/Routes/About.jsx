import "./About.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Responsive from "./Slider/Slider";
import Faq from "./Slider/Faq";
const About = () => {
  return (
    <Fragment>
      <div className="about-container1">
        <h3>About Us</h3>
        <span>
          <Link to="/">HOME</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>About Us</h4>
        </span>
      </div>
      <div className="about-container2">
        <h1>WHO WE ARE?</h1>
        <span>
          <div className="about-span">
            <div className="about-con1">
              <div className="about-box1">
                <img
                  src="https://i.ibb.co/d2NqCq5/Vision-and-Mission-Hero-Banner-2.png"
                  alt=""
                />
              </div>
              <span>
                <h4>
                  EasyPay Bank is a modern financial institution that offers a
                  wide range of banking services, from savings and checking
                  accounts to loans and online banking, all designed for
                  convenience and accessibility.
                </h4>
                <p>
                  EasyPay Bank is a well-established financial institution known
                  for its strong presence in the banking industry. The bank
                  boasts a dedicated team of experienced and customer-centric
                  staff who provide top-notch service to clients. Our management
                  team is composed of seasoned professionals with a proven track
                  record in the financial sector, ensuring the institution's
                  stability and strategic growth. Reliability is a cornerstone
                  of EasyPay Bank's reputation. We have consistently
                  demonstrated our commitment to customers by offering a wide
                  range of financial products and services. Operating
                  efficiently and effectively, we enables seamless transactions,
                  convenient online banking, and responsive customer support.
                </p>
              </span>
            </div>
            <div className="about-box2">
              <p>
                Security is a paramount concern at EasyPay Bank, and we invest
                heavily in state-of-the-art technology and protocols to
                safeguard customer information and assets. Our commitment to
                data protection and fraud prevention underscores our dedication
                to maintaining a secure banking environment.
              </p>
            </div>
          </div>

          <div className="about-con2">
            <Link>
              <i className="fa-solid fa-caret-right"></i>Trust and Estate
              Planning Services
            </Link>
            <Link to='/HomeEquity'>
              <i className="fa-solid fa-caret-right"></i>Home Equity Lines of
              Credit (HELOC)
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>ATM (Automated Teller
              Machine) Services
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>Money Market Accounts
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>Foreign Exchange
              Services
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>Wealth Management
              Services
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>Retirement Accounts{" "}
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>Investment Advisory
            </Link>
            <Link to='/AutoLoan'>
              <i className="fa-solid fa-caret-right"></i>Auto Loans
            </Link>
            <Link >
              <i className="fa-solid fa-caret-right"></i>Business Loans
            </Link>
            <Link>
              <i className="fa-solid fa-caret-right"></i>Mobile Banking
            </Link>
            <Link to='/Saving'>
              <i className="fa-solid fa-caret-right"></i>Savings Account
            </Link>
            <Link to='/Checking'>
              <i className="fa-solid fa-caret-right"></i>Checking Account
            </Link>
          </div>
        </span>
      </div>
      <div className="about-container3">
        <div className="about-box3">
          <span>
          <i className="fa-solid fa-landmark"></i>
            <h1>MISSION</h1>
          </span>
          <h4>
            Our mission is to earn and maintain the trust of our customers by
            upholding the highest standards of integrity, delivering excellent
            banking services, and safeguarding their{" "}
          </h4>
          <p>
            Also to provide our customers with exceptional banking services,
            fostering financial stability and prosperity for individuals and
            businesses alike. We are committed to delivering trusted,
            innovative, and accessible solutions while maintaining the highest
            standards of integrity, security, and customer satisfaction.
          </p>
        </div>
        <div className="about-box3">
          <span>
          <i className="fa-solid fa-arrows-to-circle"></i>
            <h1>STRATEGY</h1>
          </span>
          <h4>
            We strive to empower individuals and businesses by providing
            innovative financial solutions that promote economic growth and
            stability.
          </h4>
          <p>
            We prioritize customer-centricity, digital innovation, and seamless
            omnichannel experiences. we also focus on robust security measures,
            personalized financial solutions, and efficient problem resolution,
            ensuring that clients' needs are met while staying competitive in
            the evolving financial landscape.
          </p>
        </div>
        <div className="about-box3">
          <span>
          <i className="fa-solid fa-users-viewfinder"></i>
            <h1>PRINCIPLES</h1>
          </span>
          <h4>
            Committed to community enrichment, we aim to support local
            development through financial education, charitable initiatives, and
            accessible banking services for all.
          </h4>
          <p>
            Our fundamental principle of banking services is to provide
            financial intermediation, offering a safe and efficient platform for
            individuals and businesses to deposit, withdraw, and manage their
            money while also granting loans and credit, facilitating economic
            growth and stability.
          </p>
        </div>
      </div>
      <div className="about-container4">
        <h1>LEADERSHIP</h1>
        <div className="about-con3">
            <div className="about-box4">
                <img src="https://i.ibb.co/Jm77Xjn/images-5.jpg" alt="" />
                <h4>Sanjay Sandeef</h4>
                <p>MD & CEO </p>
            </div>
            <div className="about-box4">
                <img src="https://i.ibb.co/vkkmzss/images-3.jpg" alt="" />
                <h4>Ali Hammed</h4>
                <p>GENERAL MANAGER</p>
            </div>
            <div className="about-box4">
                <img src="https://i.ibb.co/yky5RVd/Aishah-Ahmad-525x600.jpg" alt="" />
                <h4>Paul Joyce</h4>
                <p>ADMIN MANAGER</p>
            </div>
            <div className="about-box4">
                <img src="https://i.ibb.co/7jbs8vt/images-6.jpg" alt="" />
                <h4>Waney Dick</h4>
                <p>CHAIRMAN</p>
            </div>
            <div className="about-box4">
                <img src="https://i.ibb.co/3h60yjs/chinwe.jpg" alt="" />
                <h4>Idowu Olayiwola</h4>
                <p>HUMAN RESOURCES</p>
            </div>
            <div className="about-box4">
                <img src="https://i.ibb.co/HYrNycD/morff.jpg" alt="" />
                <h4>Ibraheem Magaji</h4>
                <p>LOGISTICS MANAGER</p>
            </div>
        </div>
      </div>
      <div className="about-container5">
        <h1>TESTIMONIAL</h1>
        <Responsive/>
      </div>
      <div className="about-container6">
        <Faq/>
      </div>
    </Fragment>
  );
};

export default About;
