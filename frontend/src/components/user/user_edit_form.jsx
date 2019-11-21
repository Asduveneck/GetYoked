import React from 'react'

class UserEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.user.username,
            age: this.props.user.age,
            height: this.props.user.height,
            weight: this.props.user.weight,
            activity: this.props.user.activity,
            goals: this.props.user.goals,

        }
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.patchUser(this.state)
    }

    render() {
        return (
            <div>
                <h1>Edit User Info</h1>
                <form>
                    <label>Username
                        <p>{this.state.username}</p>
                    </label>
                    <label>Age
                        <input type="text" 
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                        />
                    </label>
                    <label>Height
                        <input type="text" 
                            value={this.state.height}
                            onChange={this.handleChange('height')}
                        />
                    </label>
                    <label>Weight
                        <input type="text" 
                            value={this.state.weight}
                            onChange={this.handleChange('weight')}
                        />
                    </label>
                    <label>Activity Level
                        <select value={this.state.activity} onChange={this.handleChange('activity')}>
                            <option value="light">Light</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                    <label>Goals
                        <select value={this.state.goals} onChange={this.handleChange('goals')}>
                            <option value="5k">5k</option>
                            <option value="lose weight">Lose Weight</option>
                            <option value="Michelle Obama arms">Michelle Obama Arms</option>
                        </select>
                    </label>

                    <button type="submit">Update Info</button>
                </form>
            </div>
        )
    }
}

export default UserEditForm;