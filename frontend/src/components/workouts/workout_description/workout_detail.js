import React from 'react';
import './workout-detail.scss';
import { Link } from 'react-router-dom';
import queryString from "query-string";
import ExerciseItem from './exercise_item.js'

class WorkoutDetail extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
      this.props.fetchWorkout(this.props.workoutId);
      this.props.fetchUser(this.props.currentUserId);
    }

    componentDidUpdate(prevProps) {
      let values = queryString.parse(prevProps.location.search)
      if (values.workoutId !== this.props.workoutId) {
        this.props.fetchWorkout(values.workoutId);
        this.props.fetchUser(this.props.currentUserId)
      }
    }

    handleClick() {

      const workoutObject = {
        _workoutId: this.props.workoutId,
        date: Date(Date.now()),
        name: this.props.workout.name,
        intensity: this.props.workout.intensity
      }
      const userWorkouts = (this.props.currentUser.workouts).slice();
      userWorkouts.push(workoutObject);


      this.props.updateUserWorkouts(this.props.currentUserId, userWorkouts);

      this.props.history.push(`/users/${this.props.currentUserId}`)
      //logic to append workout to their workout history
    }

    render() {
      if (this.props.workout === undefined) return null;

        return (
          <div className="workout-detail-window">
            <div className="workout-detail-header">
              <div className="workout-detail-pic-cartoon">
                <img src="/images/exercise_cartoons.jpg" />
              </div>
            </div>

            <div className="workout-detail-scroll">
              <div className="screen">Your workout today</div>
              <Link to="/workoutnew">
                <button className="back-button">
                  Select a different type of workout
                </button>
              </Link>
              <div className="workout-detail-description-parent">
                <div className="wo-detail-name">{this.props.workout.name}</div>
                <div className="workout-detail-item-exercise">
                  <div className="workout-description">
                    {this.props.workout.description}
                  </div>
                  <div>
                    <div>{this.props.workout.type}</div>
                    <div className="intensity">
                      INTENSITY: {this.props.workout.intensity}
                    </div>
                <div className="wo-detail-item">
                  <div className="workout-detail-item-pic">
                    <img src="/images/ripped_ginger.png" />
                  </div>
                      <ul>
                        {
                          this.props.workout.exercises.map((exercise, i) => {
                            return <ExerciseItem workout={this.props.workout} exercise={exercise} key={i} />
                          })
                        }
                        <button onClick={this.handleClick} className="wo-detail-finished-button">
                          I finished this workout!
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


export default WorkoutDetail;