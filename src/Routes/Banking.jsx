import "./Banking.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
const Banking = () => {
  return (
    <Fragment>
      <div className="banking-container1">
        <h3> Banking</h3>
        <span>
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right"></i>
          <h4>Banking</h4>
        </span>
      </div>
      <div className="banking-container2">
        <h1>PERSONAL BANKING</h1>
        <span>
          <div className="banking-con">
            <img src="https://i.ibb.co/84Cm9Wq/im-633687.jpg" alt="" />
            <div className="banking-1">
              <h3>CHEQUING & SAVINGS ACCOUNTS</h3>
              <p>
                Our bank offers convenient checking accounts for everyday
                transactions and savings accounts to help you grow your money
                with competitive interest rates.
              </p>
            </div>
            <div className="banking-box2">
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Direct Banking
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Savings
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Chequing
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Saving Plus
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Chequing Plus
                </Link>
              </span>
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Sure Start
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Senior Account
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Bridal Registry
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Direct Banking
                  Saving
                </Link>
              </span>
            </div>
          </div>
          <div className="banking-con">
            <img
              src="https://i.ibb.co/QXrLwJV/depositphotos-235370142-stock-photo-cropped-view-mortgage-broker-shaking.webp"
              alt=""
            />
            <div className="banking-2">
              <h3>MORTGAGES & LOANS</h3>
              <p>
                Our mortgage options provide financing for home purchases, while
                our loans offer flexible solutions for various needs, including
                personal, auto, and business expenses.
              </p>
            </div>
            <div className="banking-box2">
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Mortgage Account
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Customer Loan
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Student Loan
                </Link>
              </span>
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Personal Over-draft
                  Facility
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Home Equity Lines
                  of Credit (HELOCs)
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Home Equity Loan
                </Link>
              </span>
            </div>
          </div>
          <div className="banking-con">
            <img
              src="https://i.ibb.co/52GN2NW/02c71e56-aa14-11ed-ba16-0210609a3fe2.jpg"
              alt=""
            />
            <div className="banking-3">
              <h3>CREDIT CARDS</h3>
              <p>
                We offer fast-issuing, secure credit cards for your convenience,
                providing financial flexibility and peace of mind for your
                transactions and purchases.
              </p>
            </div>
            <div className="banking-box2">
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Visa Gold
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Visa Platinum
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Visa Classic
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Simpson Motor Visa
                  Credit Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Additional
                  Card-Holder
                </Link>
              </span>
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Master Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Verv Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Debit Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Credit Card
                  Security
                </Link>
              </span>
            </div>
          </div>
        </span>
        <Link to='/Contact'>Visit Our Branch</Link>
      </div>
      <div className="banking-container3">
        <h1>BUSINESS BANKING</h1>
        <span>
          <div className="banking-con">
            <img
              src="https://i.ibb.co/yfC9W4v/lk-business-savings-account-400x-400y.jpg"
              alt=""
            />
            <div className="banking-1">
              <h3>BUSINESS ACCOUNTS</h3>
              <p>
                We provide fast-issuing, secure business accounts, offering a
                reliable financial foundation for your enterprise with efficient
                services and robust security features.
              </p>
            </div>
            <div className="banking-box3">
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Direct Banking
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Savings
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Chequing
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Saving Plus
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Chequing Plus
                </Link>
              </span>
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Sure Start
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Senior Account
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Bridal Registry
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Direct Banking
                  Saving
                </Link>
              </span>
            </div>
          </div>
          <div className="banking-con">
            <img src="https://i.ibb.co/Y8tsM3H/images-9.jpg" alt="" />
            <div className="banking-2">
              <h3>CASH MANAGEMENT SERVICES</h3>
              <p>
                Our cash management services streamline financial operations,
                optimizing cash flow, payments, and collections for businesses,
                ensuring efficient financial management.
              </p>
            </div>
            <div className="banking-box3">
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Mortgage Account
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Customer Loan
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Student Loan
                </Link>
              </span>
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Personal Over-draft
                  Facility
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Home Equity Lines
                  of Credit (HELOCs)
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Home Equity Loan
                </Link>
              </span>
            </div>
          </div>
          <div className="banking-con">
            <img src="https://i.ibb.co/84Cm9Wq/im-633687.jpg" alt="" />
            <div className="banking-3">
              <h3>BORROWING AND CREDIT</h3>
              <p>
                We offer borrowing and credit solutions tailored to your needs,
                providing financial support, whether for personal expenses,
                business expansion, or other financial goals.
              </p>
            </div>
            <div className="banking-box3">
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Visa Gold
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Visa Platinum
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Visa Classic
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Simpson Motor Visa
                  Credit Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Additional
                  Card-Holder
                </Link>
              </span>
              <span>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Master Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Verv Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Debit Card
                </Link>
                <Link>
                  {" "}
                  <i className="fa-solid fa-caret-right"></i>Credit Card
                  Security
                </Link>
              </span>
            </div>
          </div>
        </span>
        <Link to='/Contact'>Visit Our Branch</Link>
      </div>
      <div className="banking-span">
        <h1>CORPORATE INVESTMENT BANKING</h1>
      </div>
      <div className="banking-container4">
        <div className="banking-con1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhBc_Cp9FW3qo0Ho2_JzCaCeGEdflnd_iz1N7mgcQeDdikgPq1hqtFQXOKnKtonkjEoY&usqp=CAU" alt="" />
          <div className="banking-box4">
            <h3>Capital Raising:</h3>
            <p>
              Corporate investment bankers assist companies in raising capital
              for various purposes, such as expanding operations, funding
              acquisitions, or restructuring. 
              options.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/jL3CYk6/what-are-mergers-and-acquisitions-social.jpg" alt="" />
          <div className="banking-box4">
            <h3>Mergers and Acquisitions (M&A):</h3>
            <p>
              : Investment bankers advise clients on mergers, acquisitions,
              divestitures, and other corporate transactions. They help in
              valuing companies, negotiating deals, and ensuring that
              transactions are structured in a way that maximizes value for
              their clients.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/b7D63Fr/financial-advisors-636x357.jpg" alt="" />
          <div className="banking-box4">
            <h3>Financial Advisory: </h3>
            <p>
              {" "}
              Investment bankers provide financial and strategic advice to
              corporations. This can include advice on corporate finance
              strategies, capital allocation, risk management, and other
              financial decisions.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://www.toolshero.com/wp-content/uploads/2022/08/project-risk-management-toolshero.jpg" alt="" />
          <div className="banking-box4">
            <h3>Risk Management:</h3>
            <p>
              Corporate investment banks help clients manage financial risks
              through derivatives, hedging strategies, and other risk mitigation
              tools.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/Yd6WTGG/Introducing-kandon-Technologies-Liquidity-Management-and-Treasury-Management-Products-for-Brands-sca.jpg" alt="" />
          <div className="banking-box4">
            <h3>Treasury Services: </h3>
            <p>
              These banks offer treasury management services, helping clients
              manage their cash flows efficiently. This can include services
              such as cash management, liquidity management, and trade finance
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/64g8sW1/structured-finance.jpg" alt="" />
          <div className="banking-box4">
            <h3>Structured Finance:</h3>
            <p>
              They structure complex financial products and transactions to meet
              the specific needs of clients. This may involve securitization,
              asset-backed securities, and other structured products.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/w6P2X2s/1512736397php-Trs-Ral.jpg" alt="" />
          <div className="banking-box4">
            <h3>Corporate Banking: </h3>
            <p>
              This involves providing traditional banking services to
              corporations, such as lending, cash management, and deposit
              services.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/C2gTnbC/webpc-passthru.webp" alt="" />
          <div className="banking-box4">
            <h3>Equity and Debt Capital Markets:</h3>
            <p>
              Corporate investment banks assist in raising capital through
              equity or debt issuance in the public or private markets. This
              includes initial public offerings (IPOs), secondary offerings, and
              bond issuances.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/Bywb3Kr/hero-major-policy-research-2x.webp" alt="" />
          <div className="banking-box4">
            <h3>Research and Analysis:</h3>
            <p>
              {" "}
              Investment banks often produce research reports on various
              industries, companies, and financial markets. This research helps
              clients make informed investment and financial decisions.
            </p>
          </div>
        </div>
        <div className="banking-con1">
          <img src="https://i.ibb.co/hcNp3vy/william-william-Nnd-Kt2k-F1-L4-unsplash.jpg" alt="" />
          <div className="banking-box4">
            <h3>Trade and Export Finance: </h3>
            <p>
              Providing financial services that facilitate international trade,
              such as letters of credit and export financing.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Banking;
