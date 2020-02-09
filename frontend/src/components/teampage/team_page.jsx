import React from 'react';
// import { Link } from 'react-router-dom';
import "./team_page.scss";
import "./team_page.css"

class TeamPage extends React.Component {

  render(){
    return (
      <div>
        <div className="team_page">
          <div className="row1">
        <div className="row"> {/* row1 */}
      
      
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="ASD.jpeg" className="circle"  alt="Avatar" width="300px" height="300px" />
            </div>
            <div className="flip-card-back">
              <nav className="dev-bio-container">
                <div className="dev-bio-links">
                  <a href="https://github.com/Asduveneck" target="_blank">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/alex-duveneck-848b118a/" target="_blank">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                  <a href="https://angel.co/alexander-duveneck" target="_blank">
                    <img src="AngelList.png" alt="AngelList" height="32px"/>
                  </a>
                  <a href="https://asduveneck.github.io/personal_site/" target="_blank" className="portfolio-link"></a>
                </div>
                  <p className="dev-bio">Full Stack Software Engineer experienced in Ruby, Rails, MongoDB, Javascript, Express, React / Redux. Former biologist and snowboarding instructor.</p>
              </nav>
            </div> 
        </div>
      </div>
    </div>
      <h1 className="col">Alex Duveneck</h1>
    </div>
        <div className="row2">
        <div className="row"> {/* row1 */}
          
        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="BA.jpeg" className="circle"  alt="Avatar" width="300px" height="300px" />
            </div>
            <div className="flip-card-back">
              <nav className="dev-bio-container">
                <div className="dev-bio-links">
                  <a href="https://github.com/baustgen" target="_blank">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/braeden-austgen-a96b52148/" target="_blank">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                  <a href="https://angel.co/braeden-austgen" target="_blank">
                    <img src="AngelList.png" alt="AngelList" height="32px" />
                  </a>
                  <a href="https://baustgen.github.io/" target="_blank" className="portfolio-link">Portfolio</a>
                </div>
                <p className="dev-bio">Full Stack Software Engineer with experience in Ruby, Rails, Javascript, and React / Redux. Softball player. Chicago Cubs fan</p>
              </nav>
            </div>
          </div>
        </div>
      </div>
            <h1 className="col" >Braeden Austgen</h1>
          </div>
        

            <div className="row1">
            <div className="row"> {/* row1 */}
    
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="circle" src="Maureen_Durnin.jpg" alt="Avatar" width="300px" height="300px" />
            </div>
            <div className="flip-card-back">
              <nav className="dev-bio-container">
                <div className="dev-bio-links">
                  <a href="https://github.com/mmdurnin" target="_blank">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/maureen-durnin-19b73a198/" target="_blank">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                  <a href="https://angel.co/https://angel.co/maureen-durnin" target="_blank">
                    <img src="AngelList.png" alt="AngelList" height="32px" />
                  </a>
                  <a href="http://www.maureendurnin.com/" target="_blank" className="portfolio-link">Portfolio</a>
                </div>
                <p className="dev-bio">Software Engineer | JavaScript Rails PostgreSQL MongoDB Express Node React Redux HTML5 CSS3</p>
              </nav>
            </div>
       
        </div>
           
          </div>
        </div>
       <h1 className="col">Maureen Durnin</h1>
        </div>

        <div className="row2">
        <div className="row"> {/* row1 */}
        
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="zaid.jpeg" className="circle"  alt="Avatar" width="300px" height="300px" />
            </div>
            <div className="flip-card-back">
              <nav className="dev-bio-container">
                <div className="dev-bio-links">
                  <a href="https://github.com/OnePunchManz" target="_blank">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/zaid-pasha-6310ba72/" target="_blank">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                  <a href="https://angel.co/https://angel.co/zaid-pasha-2" target="_blank">
                    <img src="AngelList.png" alt="AngelList" height="32px" />
                  </a>
                </div>
                <p className="dev-bio">Full Stack Engineer | React Redux, Ruby Rails, Node, SQL & JS | Former Head of Operations & Recruitment at nCent Labs</p>
              </nav>
            </div>
          </div>
        </div>
      </div>
           <h1 className="col">Zaid Pasha</h1>
      </div>
        </div>
      </div> 
      // old code 
      //   <div>
      //   <div className="col">
      //       <div class="flip-card">
      //         <div class="flip-card-inner">
      //           <div class="flip-card-front">
      //             <img src="saitama.jpeg" alt="Avatar"  />
      //              </div>
      //             <div class="flip-card-back">
      //       <h1>Alex Duveneck</h1>
      //       <p> Bio </p>
      //       <nav>Links</nav>
      //     </div>
      //     </div>
      //           </div>
      //         </div>
           

         
      //     <div className="col">
      //       {/* <h1>empty Placeholder </h1> */}
      //     </div>
      //     <div className="col">
      //       <h1>Maureen Durnin</h1>
      //       <p> Bio </p>
      //       <nav>Links</nav>
      //     </div>
      //     <div className="col">
      //       {/* <h1>empty Placeholder </h1> */}
      //     </div>
       

      //   <div className="row"> {/* row2 */}
      //     <div className="col">
      //       {/* <h1>empty Placeholder </h1> */}
      //     </div>
      //     <div className="col">
      //       <h1>Braeden Austgen</h1>
      //       <p> Bio </p>
      //       <nav>Links</nav>
      //     </div>
      //     <div className="col">
      //       {/* <h1>empty Placeholder </h1> */}
      //     </div>
      //     <div className="col">
      //       <h1>Zaid Pasha</h1>
      //       <p> Bio </p>
      //       <nav>Links</nav>
      //     </div>
      //  </div>
      //  </div >
    );
  }

}

export default TeamPage;