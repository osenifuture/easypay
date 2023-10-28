
import React from "react";
import Typewriter from "typewriter-effect";


const HomeAutoType = () => {
    const typewriterContainerStyles = {
        color: "white",
        lineHeight: "1.5rem",
        fontSize:'1.1rem',
        margin:'15px 0px'
      };
    
      return (
        <div className="typewriter-container" style={typewriterContainerStyles}>
          <Typewriter
            options={{
              strings: [
                " WE HELP YOU FIND THE RIGHT PRODUCT!",
              ],
              autoStart: true,
              loop: true,
              pause: 200,
            }}
          />
        </div>
      );
};
export default HomeAutoType;