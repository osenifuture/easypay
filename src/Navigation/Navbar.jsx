import React, { useState, Fragment, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/firebase-context";


const Navbar = () => {
  const {currentUser} = useContext(UserContext)
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 500) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    };
     window.addEventListener('scroll', handleScroll);
     return () => {
      window.addEventListener('scroll', handleScroll)
     }

  }, [])

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Fragment>
      <div className="nav-mother">
        <div className="banner">
          <div className="banner-box1">
              <h3>WE TAKE CARE OF YOUR MONEY</h3>
          </div>
          <div className="banner-box2">
            <Link to='/SignUp'>Create An Account</Link>
          </div>
          <div className="banner-box3">
            <h4>Call Toll Free:</h4>
           <p> 07000341211</p>
           <h4>M - F 8am - 5pm WAT</h4>
          </div>
        </div>
      <div className={`navbar ${scrolling ? "scrolled" : ''}`}>
        <Link to='/' className="logo">
       <span>
       Easy
        <i className="fa-brands fa-cc-amazon-pay"></i>
       </span>
       <h3> Micro Finance Bank</h3>
        </Link>
        <div
          className={`nav-link ${isMobile ? "mobile-link active" : ""} `}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="link1">Home</Link>
          <Link to="/About" className="link2">About</Link>
          {
            currentUser ? (
              <Fragment>
                <Link to="/Product" className="link3">Product  </Link>
                <Link to="/Banking" className="link6">Banking</Link>
              <Link to='/UserProfile' className="link7"><i className="fa-solid fa-user"></i> </Link>
              <Link to="/Contact" className="link5">Contact</Link>
              </Fragment>
            ):(
              <>
              <Link to='/LogIn' className="link6">Log in</Link>
              </>
            )
          }
        </div>
        <div className="mobile-menu" onClick={handleMenu}>
          {isMobile ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
