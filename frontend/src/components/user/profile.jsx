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

    render() {
        let currentTab;
        if (this.props.user === undefined) return null;

        // console.log(this.props.user.workouts);
        let numStrength = 0; let numCardio = 0; let numFlex = 0; let numUnsorted = 0;
        for(let i = 0; i < this.props.user.workouts.length; i++) {
            let workout = this.props.user.workouts[i];
            // console.log(workout.type)
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
                    // numUnsorted += 1;
                    console.log(`default option. type: ${workout.type}`)
            }
        }
        // console.log(`numStrength: ${numStrength}`)
        // console.log(`numCardio: ${numCardio}`)
        // console.log(`numFlex: ${numFlex}`)
        // console.log(`numUnsorted: ${numUnsorted}`)

        if (this.state.selectedTab === 0) {
            currentTab = (
                <div className="achievement-parent">
                    <h2>{this.props.user.username}'s Achievements</h2>

                    <p>You're currently at Achievement level {this.props.user.achievement}!</p>
                    <p>You have completed {this.props.user.workouts.length} workouts.</p>
                    <p>More specifically, you've completed {numStrength} strength workouts, {numCardio} cardio workouts, and {numFlex} flexibility workouts.</p>
                    <p>Keep up the good work!</p>
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