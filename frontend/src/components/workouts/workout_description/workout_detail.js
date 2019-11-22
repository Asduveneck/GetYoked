import React from 'react';
import './workout-detail.scss';
import { Link } from 'react-router-dom';

class WorkoutDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div className="workout-detail-window">


            <div className="workout-detail-header">
              <div className="workout-detail-pic-cartoon">
                <img src="/images/exercise_cartoons.jpg" />
              </div>
            </div>

            <div className="workout-detail-scroll">
                <div className="screen">Your workout today</div>
                <Link to="/workoutnew"><button>Select a different type of workout</button></Link>
                <div className="workout-detail-description-parent">
                    <div className="wo-detail-name">Workout Name Placeholder</div>
                    <div className="wo-detail-item">
                        <div className="workout-detail-item-pic">Workout picture placeholder</div>
                        <div className="workout-detail-item-exercise">Exercise description placeholder</div>
                    </div>
                </div>
            </div>

          </div>
        );
    }
}


export default WorkoutDetail;