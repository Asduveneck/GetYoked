import React from 'react'

class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info-parent">
                <h2>{this.props.user.username}'s Info</h2>

                <ul>
                    <li>
                        <h4>Username</h4>
                        <p>{this.props.user.username}</p>
                    </li>
                    <li>
                        <h4>Age</h4>
                        <p>{this.props.user.age}</p>
                    </li>
                    <li>
                        <h4>Height</h4>
                        <p>{this.props.user.height} inches</p>
                    </li>
                    <li>
                        <h4>Weight</h4>
                        <p>{this.props.user.weight} lbs</p>
                    </li>
                    <li>
                        <h4>Activity Level</h4>
                        <p>{this.props.user.activity}</p>
                    </li>
                    <li>
                        <h4>Goals</h4>
                        <p>{this.props.user.goals}</p>
                    </li>
                    <li>
                        <button className = "edit-button start" onClick={this.props.beginEdit}>Edit Info</button>
                    </li>
                </ul>
            </div>
        )
    }
}


export default UserInfo;