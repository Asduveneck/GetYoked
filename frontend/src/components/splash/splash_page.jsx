import React from 'react';
import { Link } from 'react-router-dom';
import "./splash_page.scss";
class SplashPage extends React.Component {

  render(){
    return (
      <div className="splash_page">

        <h1>Join the fastest growing techy fitness community</h1>

        <div className="what_we_do">
          <h2 className="feel_motivated"> Feel motivated as you unlock rewards and achievements</h2>
          <ul className="spaced_frames">
            <li>Screenshot of achievements page</li>
            <li>Screenshot of potential character design?</li>
          </ul>
        </div>

        <div className="how_you_grow">
          <h2>How can you grow with our app?</h2>

          <div className="sp_hyg_3_cols">
            <div className="sp_hyg_col"> {/* column 1*/}
              {/* corresponding image to */}
              <h3>Build your Strength</h3>
              <p> Start small, but slowly and steadily build your strength as you progress through our exercise program.</p> 
            </div>
            <div className="sp_hyg_col"> {/* column 2*/}
              {/* corresponding image to */}
              <h3>Enhance your Cardiovascular Health</h3>
              <p>Want to run a marathon? Bike 50 miles within a day? Complete an iron-man competition? We'll help you become the you you want to be.</p>
            </div>
            <div className="sp_hyg_col"> {/* column 3*/}
              {/* corresponding image to */}
              <h3>Stretch yourself</h3>
              <p>Want to increase your range of motion, prevent injuries, and increase your sense of balance?</p>
            </div>
          </div>

        </div>

        <div className="what_we_offer"> 
            <h2 className="screenshots">Lots of pics Row with screenshots</h2>
            {/* Fake screenshots of our app with made up features */}
            <ul className="spaced_frames">
              <li>Well thought-out progressions</li>
              <li>Easy to use interface</li>
              <li>Record your performance with a single click</li>
            </ul>
        </div>

        <div className="join_us"> 
        <h2>What are you waiting for?</h2>
        <h3>
          <Link to={"/signup"}>Join us today and get started within a minute!</Link>
        </h3>
        </div>

      </div> // End of splashPage
    );
  }
}

export default SplashPage;