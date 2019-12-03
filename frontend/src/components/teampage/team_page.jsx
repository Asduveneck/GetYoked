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
                    <img src="AD.jpeg" className="circle"  alt="Avatar" width="300px" height="300px" />
            </div>
            <div className="flip-card-back">
              <nav className="dev-bio-container">
                <div className="dev-bio-links">
                  <a href="https://github.com/Asduveneck" target="_blank" className="github-link">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/alex-duveneck-848b118a/" target="_blank" className="github-link">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                </div>
                <p className="dev-bio"></p>
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
                  <a href="https://github.com/baustgen" target="_blank" className="github-link">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/braeden-austgen-a96b52148/" target="_blank" className="github-link">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
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
                  <a href="https://github.com/mmdurnin" target="_blank" className="github-link">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/maureen-durnin-19b73a198/" target="_blank" className="github-link">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                </div>
                <p className="dev-bio"></p>
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
                  <a href="https://github.com/OnePunchManz" target="_blank" className="github-link">
                    <img src="GitHub.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/zaid-pasha-6310ba72/" target="_blank" className="github-link">
                    <img src="LinkedIn.png" alt="LinkedIn" />
                  </a>
                </div>
                <p className="dev-bio"></p>
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