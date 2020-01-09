import React from 'react'
import UserInfo from './user_info'
import UserEditForm from "./user_edit_form"
import UserWorkouts from './user_workouts'
import './profile.scss'
import { withRouter} from 'react-router-dom'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,
            edit: false
        }
        this.beginEdit = this.beginEdit.bind(this)
        this.cancelEdit = this.cancelEdit.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchUser(this.props.match.params.id)
        }
    }

    selectTab(index) {
        return (e) => {
            this.setState({selectedTab: index})
        }
    }

    beginEdit() {
        this.setState({edit: true})
    }

    cancelEdit() {
        this.setState({edit: false})
    }

    // console.log(titleMaker(33, ["title 0", "title 1", "title 2", "title 3"]));

    render() {
        let currentTab;
        if (this.props.user === undefined) return null;

        // Create constants to store number of workouts of each type
        let numStrength = 0; let numCardio = 0; let numFlex = 0; let numUnsorted = 0;

        // Iterate through workouts array once, and increment above respectively
        for(let i = 0; i < this.props.user.workouts.length; i++) {
            let workout = this.props.user.workouts[i];

            switch(workout.type) {
                case "strength":
                    numStrength += 1;
                    break;
                case "cardio":
                    numCardio += 1;
                    break;
                case "flexibility":
                    numFlex += 1;
                    break;
                case undefined:
                    numUnsorted += 1;
                    break;
                default:
                    break;
            }
        }
        // Rewards given at 10, 25, 100
        // function that returns a pojo to make giving a workout
        function titleMaker(categoryType, num, titlesArray) {
            if (num >= 100) { // if a user has completed 100 or more workouts, level 3
                return { category: categoryType, numCompleted: 100, goal: 100, title: titlesArray[3], level: 3 };
            } else if (num > 25) {
                return { category: categoryType, numCompleted: num, goal: 100, title: titlesArray[2], level: 2 };
            } else if (num > 10) {
                return { category: categoryType, numCompleted: num, goal: 25,  title: titlesArray[1], level: 1 };
            } else { // case num > 0
                return {category: categoryType,  numCompleted: num, goal: 10,  title: titlesArray[0], level: 0 };
            }
        }
        // titles for each category, from lowest to highest level
        let titlesStrength = ["", "Getting Swole", "Kinda Swole", "Super Swole"];
        let titlesCardio  = ["", "Getting fit", "Half Marathoner", "Full Marathon"];
        let titlesFlex    = ["", "Getting flex", "Contortionist", "Cobra"];

        // Uses titles to generate basic levels per category
        let levelStrength = titleMaker("Strength", numStrength, titlesStrength);
        let levelCardio = titleMaker("Cardio", numCardio, titlesCardio);
        let levelFlex = titleMaker("Flexibility", numFlex, titlesFlex);

        // Use previous levels per category for overall average combo award
        let titlesWorkoutAll = ["", "King", "Genos", "Saitama"];
        let workoutLevels = [levelStrength.level, levelCardio.level, levelFlex.level];
        let levelWorkoutAll = { category: "overall"};

        function goalMaker(level) {
            return `Hit level ${level} in all workout categories`;
        }
        
        // Syntax for 'some' is horribly wrong.
        /*
        if (workoutLevels.some() < 1) { // no workouts past 1 => all workouts < 1
            levelWorkoutAll.title = titlesWorkoutAll[0];
            levelWorkoutAll.level = 0;
            levelWorkoutAll.goal = goalMaker(1);
        } else if(workoutLevels.some() < 2) { // not all workouts hit 2
            levelWorkoutAll.title = titlesWorkoutAll[1];
            levelWorkoutAll.level = 1;
            levelWorkoutAll.goal = goalMaker(2);
        } else if (workoutLevels.some() < 3) {  // not all workouts hit 3
            levelWorkoutAll.title = titlesWorkoutAll[2];
            levelWorkoutAll.level = 2;
            levelWorkoutAll.goal = goalMaker(3);
        } else { // hit level 3 in all workouts
            levelWorkoutAll.title = titlesWorkoutAll[2];
            levelWorkoutAll.level = 2;
            levelWorkoutAll.goal = "Congratulations";
        }
        */
        if (this.state.selectedTab === 0) {
            currentTab = (
                <div className="achievement-parent">
                    <h2>{this.props.user.username}'s Achievements</h2>

                    <p>You're currently at Achievement level {this.props.user.achievement}!</p>
                    <p>You have completed {this.props.user.workouts.length} workouts.</p>
                    <p>More specifically, you've completed {numStrength} strength workouts, {numCardio} cardio workouts, and {numFlex} flexibility workouts.</p>
                    <p>Keep up the good work!</p>
                    <div className="awards">
                    {/* Map through array of each workout level pojo */}
                    {[levelStrength, levelCardio, levelFlex].map(award => {
                        // deconstruct the award for subsequent div:
                        let { category, numCompleted, goal, title, level } = award; // Get rid of numCompleted here
                        // Conditional logic if numCompleted is there (for comboGoals).
                        /*
                        let newGoal = "";
                        if (award.numCompleted) { // NOT a combo goal
                            newGoal = `${numCompleted} / ${goal}`
                        } else {
                            newGoal = goal; // original goal suffices
                        }
                        // replace workout_goal content with {newGoal}
                        */

                        return (
                            <div className={`indv_award ${category}`}>
                                <h1>{title}</h1>
                                <h3>Level {level} in {category}</h3>
                                <div>Placeholder Div for Image?</div>
                                <span className="workout_goal">{numCompleted} / {goal}</span>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
            )
        } else if (this.state.selectedTab === 1) {
            if (this.state.edit) {
                currentTab = (
                    <UserEditForm
                        user={this.props.user}
                        cancelEdit={this.cancelEdit}
                        patchUser={this.props.patchUser}
                    />
                )
            } else {
                currentTab = (
                    <UserInfo 
                        user={this.props.user}
                        beginEdit={this.beginEdit}
                        cancelEdit={this.cancelEdit}
                    />
                )
            }
            
        } else if (this.state.selectedTab === 2) {

            currentTab = (
                // FIND ME how is workout info stored in state?
                <UserWorkouts
                    user={this.props.user}
                    workouts={this.props.user.workouts}
                    fetchUser={this.props.fetchUser}
                    userId={this.props.match.params.id}
                />
            )
        }

        return (
            <div className="profile-window">
                <div className="user-profile">
                    <div className="user-profile-greeting">Hi there, {this.props.user.username}</div>
                    <ul className="tab-container">
                        <h2 onClick={this.selectTab(0)}>Achievements</h2>
                        <h2 onClick={this.selectTab(1)}>User Info</h2>
                        <h2 onClick={this.selectTab(2)}>Workout History</h2>
                    </ul>

                    <div className="currentTab">
                        {currentTab}
                    </div>
                    
                </div>
            </div>    
        )
    }
}


export default Profile;