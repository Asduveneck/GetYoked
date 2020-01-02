import React from 'react';
import { Link } from 'react-router-dom';
import "./splash_page.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class SplashPage extends React.Component {

  render(){
    return (
      <div className="splash_page">
        <div className="head-image-container">
          <img src="/images/community_2.jpg" />
        </div>
        <h1>Join the fastest growing fitness community</h1>

        <div className="what_we_do">
          <h2 className="feel_motivated">
            {" "}
            Feel motivated as you unlock rewards and achievements
          </h2>
          <ul className="spaced_frames">
            <ScrollAnimation animateIn="fadeInDown" duration="2">
              <div className="circle-image-container">
                <img src="/images/potential_2.jpg" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="pulse" duration="2">
              <div className="circle-image-container">
                <img src="/images/potential_3.jpg" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" duration="2">
              <div className="circle-image-container">
                <img src="/images/potential_1.jpg" />
              </div>
            </ScrollAnimation>
          </ul>
        </div>

        <div className="how_you_grow">
          <h2>How can you grow with our app?</h2>

          <div className="sp_hyg_3_cols">
            <div className="sp_hyg_col">
              {" "}
              {/* column 2*/}
              {/* corresponding image to */}
              <h3>Enhance your Cardiovascular Health</h3>
              <p>We'll help you become the you that you want to be.</p>
            </div>
            <div className="sp_hyg_col">
              {" "}
              {/* column 1*/}
              {/* corresponding image to */}
              <h3>Build your Strength</h3>
              <p>
                {" "}
                Start small, but slowly and steadily build your strength as you
                progress through our exercise program.
              </p>
            </div>
            <div className="sp_hyg_col">
              {" "}
              {/* column 3*/}
              {/* corresponding image to */}
              <h3>Stretch yourself</h3>
              <p>
                Want to increase your range of motion, prevent injuries, and
                increase your sense of balance?
              </p>
            </div>
          </div>
        </div>

        {/* <div className="what_we_offer">
          <h2 className="screenshots">Lots of pics Row with screenshots</h2> */}
          {/* Fake screenshots of our app with made up features */}
          {/* <ul className="spaced_frames">
            <li>Well thought-out progressions</li>
            <li>Easy to use interface</li>
            <li>Record your performance with a single click</li>
          </ul>
        </div> */}

        <div className="join_us">
          <div className="row-splash join-content">
            <div className="row-column join-sub-content">
              <h2>What are you waiting for?</h2>
              <img src="/login_background_4.png" />
            </div>
            <h3>
              <Link to={"/signup"}>Join Us Now!</Link>
            </h3>
          </div>
          <div className="diagonal-splash"></div>
        </div>
      </div> // End of splashPage
    );
  }
}

export default SplashPage;