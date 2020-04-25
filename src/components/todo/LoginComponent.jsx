import React, { Component } from "react";
import AuthenticationService from './AuthenticationService'
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'nasim',
            password: '',
            successMessage: false,
            LoginFailed: false
        }
        // this.userNameHandle = this.userNameHandle.bind(this)
        // this.passwordHandle = this.passwordHandle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginChange = this.loginChange.bind(this)

    }
    // userNameHandle = (event) => {
    //     this.setState({ username: event.target.value })
    // }

    // passwordHandle = (event) => {
    //     this.setState({ password: event.target.value })
    // }

    loginChange() {
        if (this.state.username === 'nasim' && this.state.password === 'nasim') {
            AuthenticationService.registerSuccesfulLogin(`${this.state.username}`)
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({ successMessage: true })
            // this.setState({ LoginFailed: false })
            // console.log("Successful")
        }
        else {
            this.setState({ successMessage: false })
            this.setState({ LoginFailed: true })
            console.log("Failed")
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
               {/* <InvalidCredential LoginFailed={this.state.LoginFailed} />
                <Success successMessage={this.state.successMessage} />  */}
                {this.state.successMessage && <div className="alert alert-warning">Successful</div>}
                {this.state.LoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                User Name : <input type="text" onChange={this.handleChange} name="username" value={this.state.username} />
                Password : <input type="password" onChange={this.handleChange} name="password" value={this.state.password} />
                <button className="btn btn-primary" onClick={this.loginChange}>Submit</button>
            </div>
        );
    }
}
/* function InvalidCredential(props) {
    if (props.LoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null
}

function Success(props) {
    if (props.successMessage) {
        return <div>Successful</div>
    }
    return null
} */

export default LoginComponent