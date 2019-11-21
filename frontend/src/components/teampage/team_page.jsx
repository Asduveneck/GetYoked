import React from 'react';
// import { Link } from 'react-router-dom';
import "./team_page.scss";

class TeamPage extends React.Component {

  render(){
    return (
      <div className="team_page">
        {/* Ideal format
      
      Alex                  Maureen
               Braeden               Zaid

      */}

        <div className="row"> {/* row1 */}
          <div className="col">
            <h1>Alex Duveneck</h1>
            <p> Bio </p>
            <nav>Links</nav>
          </div>
          <div className="col">
            {/* <h1>empty Placeholder </h1> */}
          </div>
          <div className="col">
            <h1>Maureen Durnin</h1>
            <p> Bio </p>
            <nav>Links</nav>
          </div>
          <div className="col">
            {/* <h1>empty Placeholder </h1> */}
          </div>
        </div>

        <div className="row"> {/* row2 */}
          <div className="col">
            {/* <h1>empty Placeholder </h1> */}
          </div>
          <div className="col">
            <h1>Braeden Austgen</h1>
            <p> Bio </p>
            <nav>Links</nav>
          </div>
          <div className="col">
            {/* <h1>empty Placeholder </h1> */}
          </div>
          <div className="col">
            <h1>Zaid Pasha</h1>
            <p> Bio </p>
            <nav>Links</nav>
          </div>
        </div>
      </div>
    );
  }

}

export default TeamPage;