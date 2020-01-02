import React from 'react'

class UserEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.user._id,
            username: this.props.user.username, 
            age: this.props.user.age,
            height: this.props.user.height,
            weight: this.props.user.weight,
            activity: this.props.user.activity,
            goals: this.props.user.goals,
            achievement: this.props.user.achievement,

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.patchUser(this.state)
        this.props.cancelEdit()
    }

    render() {
        return (
          <div className="user-info-parent">
            <h2>Edit User Info</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                <h4>Username</h4>
                <p>{this.state.username}</p>
              </label>
              <label>
                  <h4>Age</h4>
                <input
                  type="text"
                  value={this.state.age}
                  onChange={this.handleChange("age")}
                />
              </label>
              <label>
                  <h4>Height</h4>
                <input
                  type="text"
                  value={this.state.height}
                  onChange={this.handleChange("height")}
                />
              </label>
              <label>
                  <h4>Weight</h4>
                <input
                  type="text"
                  value={this.state.weight}
                  onChange={this.handleChange("weight")}
                />
              </label>
              <label>
                  <h4>Activity Level</h4>
                <select
                  value={this.state.activity}
                  onChange={this.handleChange("activity")}
                >
                  <option value="light">Light</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              <label>
                  <h4>Goals</h4>
                <select
                  value={this.state.goals}
                  onChange={this.handleChange("goals")}
                >
                  <option value="5k">5k</option>
                  <option value="lose weight">Lose Weight</option>
                  <option value="Michelle Obama arms">
                    Michelle Obama Arms
                  </option>
                </select>
              </label>

              <input className="edit-button submit" type="submit" value="Update Info" />
            </form>
          </div>
        );
    }
}

export default UserEditForm;