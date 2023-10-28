import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-con1">
                <Link to='/Product' className="account-link">01. FIND THE RIGHT ACCOUNT</Link>
                <Link to='/Banking' className="card-link">02. CHOOSE THE RIGHT CREDIT CARD</Link>
                <Link to='/Banking' className="saving-link">03. GROW YOUR SAVING TAX-FREE</Link>
            </div>
            <div className="footer-con2">
                <h3>Sign up to receive bank`s & financial news:</h3>
                <form >
                    <input type="text" name="email" placeholder="ENTER YOUR VALID EMAIL HERE" />
                    <button>SUBSCRIBE</button>
                </form>
            </div>
            <div className="footer-con3">
                <div className="footer-box">
                <h3>GET IN TOUCH</h3>
                <p>No 2,Igbonna Road Osogbo, Osun State </p>
                <span className="email-span">
                <p>Email:</p> 
                <a href="/">easypay012@gamil.com</a>
                </span>
               <span>
                <a href="/"><i className="fa-brands fa-facebook"></i></a>
                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://maps.app.goo.gl/7nYDJB75jfayUnWS6"><i className="fa-solid fa-location-dot"></i></a>
               </span>
                </div>
                <div className="footer-box">
                    <h3>Tools & Calculators</h3>
                    <Link><i className="fa-solid fa-caret-right"></i>Forein Exchange</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Credit Card Selector</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Account Selector</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Mortgage Payment</Link>
                </div>
                <div className="footer-box">
                    <h3>Customer service</h3>
                    <Link><i className="fa-solid fa-caret-right"></i>Applying Online</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Branch and ATM Locator</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Children Account</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Tour Payment</Link>
                </div>
                <div className="footer-box">
                    <h3>Security centre</h3>
                    <Link><i className="fa-solid fa-caret-right"></i>Report a Fraudlent Email</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Online Banking Guarantee</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Protecting Your Privacy</Link>
                    <Link><i className="fa-solid fa-caret-right"></i>Report Security Concerns</Link>
                </div>

            </div>
        </div>
    )
};

export default Footer;