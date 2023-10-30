import "./Product.css"
import ProductSwitch from "./Slider/ProductSwitch";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const Product = () => {
    return(
        <Fragment>
        <div className="product-container1">
           <h3> Products and Rates</h3>
         <span>
         <Link to='/'>Home</Link>
            <i className="fa-solid fa-angle-right"></i>
            <h4>Products and Rates</h4>
         </span>
        </div>
        <div className="product-container2">
            <ProductSwitch/>
        </div>
        </Fragment>
    )
};
export default Product;