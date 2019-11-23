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
        if (this.state.selectedTab === 0) {
            currentTab = (
                <div className="achievement-parent">
                    <h2>{this.props.user.username}'s Achievements</h2>

                    <p>You're currently at Achievement level {this.props.user.achievement}!</p>
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