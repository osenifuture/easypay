import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Navbar from "./Navigation/Navbar";
import { Fragment, useEffect } from "react";
import LogIn from "./Auth/LogIn";
import SignUp from "./Auth/SignUp";
import Userprofile from "./Routes/UserProfile";
import Banking from "./Routes/Banking";
import Product from "./Routes/Product";
import Blog from "./Routes/Blog";
import Saving from "./Routes/Category/Saving";
import Checking from "./Routes/Category/Checking";
import CreditCard from "./Routes/Category/CreditCard";
import Business from "./Routes/Category/Business";
import HomeEquity from "./Routes/Category/HomeEquity";
import AutoLoan from "./Routes/Category/AutoLoan";
import Mortgage from "./Routes/Category/Mortgage";
import Certificate from "./Routes/Category/Certificate";
import Personal from "./Routes/Category/Personal";
import Footer from "./Footer/Footer";
import ScrollToTop from "./Spinner/ScrollToTop";
import { useLocation } from "react-router-dom";

function App() {
const Location = useLocation();
useEffect(() => {
  window.scroll(0,0)
}, [Location])
  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element= {<Home/>}/>
        <Route path="/About" element={<About/>}/> 
        <Route path="/Banking" element={<Banking/>}/> 
        <Route path="/Blog" element={<Blog/>}/> 
        <Route path="/Product" element={<Product/>}/> 
        <Route path="/Contact" element={<Contact/>}/> 
        <Route path="/Saving" element={<Saving/>}/> 
        <Route path="/Checking" element={<Checking/>}/> 
        <Route path="/AutoLoan" element={<AutoLoan/>}/> 
        <Route path="/HomeEquity" element={<HomeEquity/>}/> 
        <Route path="/Business" element={<Business/>}/> 
        <Route path="/Mortgage" element={<Mortgage/>}/> 
        <Route path="/Personal" element={<Personal/>}/> 
        <Route path="/Certificate" element={<Certificate/>}/> 
        <Route path="/CreditCard" element={<CreditCard/>}/> 
        <Route path="/LogIn" element={<LogIn/>}/> 
        <Route path="/SignUp" element={<SignUp/>}/> 
        <Route path="/UserProfile" element={<Userprofile/>}/> 
      </Route>
    </Routes>
<Footer/>
<ScrollToTop/>
    </Fragment>
  );
}

export default App;
