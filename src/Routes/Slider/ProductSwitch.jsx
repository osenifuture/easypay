import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"


const ProductSwitch = () => {
    useEffect(() => {
        Aos.init({duration:1000})
    }, [])
    const [all, setAll] = useState(true);
    const [category1, setCategory1] = useState(false);
    const [category2, setCategory2] = useState(false);
    const [category3, setCategory3] = useState(false);

    const handleAll = () => {
        setAll(true);
        setCategory1(false);
        setCategory2(false);
        setCategory3(false);
    };
    const handleCategory1 = () => {
        setAll(false);
        setCategory1(true);
        setCategory2(false);
        setCategory3(false);
    };
    const handleCategory2 = () => {
        setAll(false);
        setCategory1(false);
        setCategory2(true);
        setCategory3(false);
    };
    const handleCategory3 = () => {
        setAll(false);
        setCategory1(false);
        setCategory2(false);
        setCategory3(true);
    };

    return(
        <div className="productswitch-container">
            <div className="product-switch">
                <p>Category:</p>
                <button onClick={handleAll}>Show All</button>
                <button onClick={handleCategory1}>Category 1</button>
                <button onClick={handleCategory2}>Category 2</button>
                <button onClick={handleCategory3}>Category 3</button>
            </div>
            {
                all && (
                    <div className="all">
                        <Link to='/Saving' data-aos="fade-down">
                        <img src="https://i.ibb.co/84Cm9Wq/im-633687.jpg" alt="" />
                        <h3>Savings Accounts</h3>
                        <p>A savings account is a basic banking product that allows individuals</p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Checking' data-aos="zoom-in">
                        <img src="https://i.ibb.co/2Y8Mdv9/cheque-650-400-650x400-71470323316.jpg" alt="" />
                        <h3>Checking Accounts</h3>
                        <p>hecking accounts are designed for daily transactions. We provide  </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Certificate'  data-aos="fade-up">
                        <img src="https://i.ibb.co/FnFSHJc/CDs-vs-Savings-Accounts-composite-image.webp" alt="" />
                        <h3>Certificates of Deposit (CDs)</h3>
                        <p>CDs are time-deposit accounts that offer higher interest </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/CreditCard' data-aos="fade-down">
                        <img src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg" alt="" />
                        <h3>Credit Cards</h3>
                        <p>Credit cards enable customers to make purchases on credit, </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Personal' data-aos="fade-up">
                        <img src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp" alt="" />
                        <h3>Personal Loans</h3>
                        <p>Personal loans are unsecured loans that allow borrowers </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Mortgage' data-aos="fade-down">
                        <img src="https://i.ibb.co/QXrLwJV/depositphotos-235370142-stock-photo-cropped-view-mortgage-broker-shaking.webp" alt="" />
                        <h3>Mortgages</h3>
                        <p>Mortgages are long-term loans used to finance the purchase of a home</p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/AutoLoan' data-aos="fade-up">
                        <img src="https://i.ibb.co/93m6wm9/car-financing-1.jpg" alt="" />
                        <h3>Auto Loans</h3>
                        <p>Auto loans are used to finance the purchase of a vehicle. </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/HomeEquity'  data-aos="fade-down">
                        <img src="https://i.ibb.co/3NnG7jw/what-is-a-home-equity-line-of-credit-heloc.jpg" alt="" />
                        <h3>Home Equity Lines of Credit (HELOCs)</h3>
                        <p>HELOCs allow homeowners to borrow against the equity in their homes.  </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Business' data-aos="fade-up">
                        <img src="https://i.ibb.co/yfC9W4v/lk-business-savings-account-400x-400y.jpg" alt="" />
                        <h3>Business Accounts</h3>
                        <p>Business accounts cater to the financial needs of businesses and </p>
                        <button>Read More</button>
                        </Link>

                    </div>
                )}
            {
                category1 && (
                    <div className="category-1">
                         <Link to='/Saving'  data-aos="fade-down">
                        <img src="https://i.ibb.co/84Cm9Wq/im-633687.jpg" alt="" />
                        <h3>Savings Accounts</h3>
                        <p>A savings account is a basic banking product that allows individuals</p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/CreditCard' data-aos="zoom-up">
                        <img src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg" alt="" />
                        <h3>Credit Cards</h3>
                        <p>Credit cards enable customers to make purchases on credit, </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Checking'  data-aos="fade-up">
                        <img src="https://i.ibb.co/2Y8Mdv9/cheque-650-400-650x400-71470323316.jpg" alt="" />
                        <h3>Checking Accounts</h3>
                        <p>hecking accounts are designed for daily transactions. We provide  </p>
                        <button>Read More</button>
                        </Link>
                    </div>
                )}
            {
                category2 && (
                    <div className="category-2">
                          <Link to='/Business'  data-aos="fade-down">
                        <img src="https://i.ibb.co/yfC9W4v/lk-business-savings-account-400x-400y.jpg" alt="" />
                        <h3>Business Accounts</h3>
                        <p>Business accounts cater to the financial needs of businesses and </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/HomeEquity' data-aos="zoom-up">
                        <img src="https://i.ibb.co/3NnG7jw/what-is-a-home-equity-line-of-credit-heloc.jpg" alt="" />
                        <h3>Home Equity Lines of Credit (HELOCs)</h3>
                        <p>HELOCs allow homeowners to borrow against the equity in their homes.  </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/AutoLoan' data-aos="fade-up">
                        <img src="https://i.ibb.co/93m6wm9/car-financing-1.jpg" alt="" />
                        <h3>Auto Loans</h3>
                        <p>Auto loans are used to finance the purchase of a vehicle. </p>
                        <button>Read More</button>
                        </Link>
                    </div>
                )}
            {
                category3 && (
                    <div className="category-3">
                        <Link to='/Mortgage' data-aos="fade-down">
                        <img src="https://i.ibb.co/SNdKZcs/finishing-successful-deal-real-estate-260nw-1414827998.webp" alt="" />
                        <h3>Mortgages</h3>
                        <p>Mortgages are long-term loans used to finance the purchase of a home</p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Personal' data-aos="zoom-up">
                        <img src="https://i.ibb.co/6g64vWv/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.webp" alt="" />
                        <h3>Personal Loans</h3>
                        <p>Personal loans are unsecured loans that allow borrowers </p>
                        <button>Read More</button>
                        </Link>
                        <Link to='/Certificate'  data-aos="fade-up">
                        <img src="https://i.ibb.co/FnFSHJc/CDs-vs-Savings-Accounts-composite-image.webp" alt="" />
                        <h3>Certificates of Deposit (CDs)</h3>
                        <p>CDs are time-deposit accounts that offer higher interest </p>
                        <button>Read More</button>
                        </Link>
                    </div>
                )}
        </div>
    )
};

export default ProductSwitch;