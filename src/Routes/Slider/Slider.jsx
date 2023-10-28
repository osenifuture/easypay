
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default class Responsive extends Component {
    render() {
      var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="slider-container1">
          <Slider {...settings} className="slide">
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                I've been a customer for over a decade, and the your services have always exceeded my expectations. From online banking to in-branch assistance, they provide top-notch service!
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://media.istockphoto.com/id/613531310/photo/young-and-handsome.jpg?s=612x612&w=0&k=20&c=RJVt3sQQ6uhh9JPSBjgTnnKrYlexIJHLsYMHOr_Dskg="
                  alt=""
                />
                <div className="slider-tag">
                  <h3>ANDREW OKAFOR</h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                Your customer support is outstanding. You've resolved every issue I've had promptly and professionally. It's reassuring to know that they are reliable.
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2312294275/display_1500/stock-photo-handsome-hispanic-man-wearing-suit-and-tie-showing-palm-hand-and-doing-ok-gesture-with-thumbs-up-2312294275.jpg"
                  alt=""
                />
                <div className="slider-tag">
                  <h3>LINUS OBI </h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                I recently got a mortgage through this bank, and the process was incredibly smooth. Their mortgage team guided me every step of the way. Highly recommend!
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6941.jpg?w=2000"
                  alt=""
                />
                <div className="slider-tag">
                  <h3>JAMES OKONKWO</h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                I've traveled internationally, and this bank's foreign currency exchange services are fantastic. It's made my trips stress-free, and their rates are competitive.
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://i.cbc.ca/1.6699110.1672266615!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1244905750.jpg"
                  alt=""
                />
                <div className="slider-tag">
                  <h3>BEN DICK</h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                The bank's mobile app is user-friendly and packed with features. I can manage my accounts, pay bills, and even deposit checks with ease. It's a game-changer.
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://media.istockphoto.com/id/1262964434/photo/what-you-bring-determines-what-you-become.jpg?s=612x612&w=0&k=20&c=lap7B5n-Xik2a_hhB5Z0hRBgmY4pUdXf9OGh6ZZH3EE="
                  alt=""
                />
                <div className="slider-tag">
                  <h3>ANIFOWOSE GAFAR </h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p> 
                appreciate the bank's commitment to security. Their multi-factor authentication and fraud prevention measures give me peace of mind when banking online.
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg"
                  alt=""
                />
                <div className="slider-tag">
                  <h3>ANISH YEN</h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                The staff at my local branch is always friendly and helpful. They know me by name, and the personal touch in their service is a rare find these days.          
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEyyVFksn28XREA4WiRbjvhUqr0dYlDRHow&usqp=CAU"
                  alt=""
                />
                <div className="slider-tag">
                  <h3>BEN WHITE</h3>
                </div>
              </div>
            </div>
  
            <div className="slider">
              <div className="slider-box1">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                This bank's investment services have helped me grow my wealth. Their financial advisors are knowledgeable and provide tailored solutions to meet my goals.
                </p>
              </div>
              <div className="slider-box2">
                <img
                  src="https://media.istockphoto.com/id/1332373959/photo/very-happy-young-man-man.jpg?s=612x612&w=0&k=20&c=Du2cXmLD1Q19Ne_mTfO1lg5qr4h2lzZ7PljLNUQO94g="
                  alt=""
                />
                <div className="slider-tag">
                  <h3> TUNDE GBADAMOSI</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      );
    }
  }
  