import React from 'react';
// import { Link } from 'react-router-dom';
import "./splash_page.scss";
class SplashPage extends React.Component {

  render(){
    return (
      <div className="splash_page">

        <div className="what_we_do">
          <h1>Join the fastest growing techy fitness community</h1>
          <p>Feel motivated as you unlock rewards and achievements</p>
        </div>

        <div className="how_you_grow">
          <h1>How can you grow with our app?</h1>

          <div className="sp_hyg_3_cols">
            <div className="sp_hyg_col"> {/* column 1*/}
              {/* corresponding image to */}
              <h2>Increase your Strength and Durability</h2>
            </div>
            <div className="sp_hyg_col"> {/* column 2*/}
              {/* corresponding image to */}
              <h2>Enhance your Cardiovascular Health</h2>
            </div>
            <div className="sp_hyg_col"> {/* column 3*/}
              {/* corresponding image to */}
              <h2>Become more flexible</h2>
            </div>
          </div>

        </div>

        <div className="what_we_offer"> 
            <h2>Lots of pics</h2>
            {/* Fake screenshots of our app with made up features */}
        </div>

        <div className="join_us"> 
        <h2>Sign up link disguised as button</h2>
        </div>

      </div> // End of splashPage
    );
  }
}

export default SplashPage;