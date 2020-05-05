import React, { Component } from "react";
import { Link } from "react-router-dom";
import WelcomeService from "../../api/WelcomeService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrivewelcomeMessage = this.retrivewelcomeMessage.bind(this)
        this.state = {
            welcome: "",
            errorMessage: ""
        }
    }

    retrivewelcomeMessage() {
        //    WelcomeService.executeHelloWorldService().then(response=>{
        //        this.setState({welcome:response.data})
        //    })
        WelcomeService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }
    handleSuccessfulResponse(response) {
        this.setState({ welcome: response.data })
    }
    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        if (error.message)
            errorMessage += error.message
        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ welcome: errorMessage })
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Welcome </h1>
            Welcome {this.props.match.params.name} . Manage your todos <Link to="/users">Click here</Link>
                    
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
          <button className="btn btn-primary" onClick={this.retrivewelcomeMessage}>Get</button>
                </div>
                {this.state.welcome}
            </>
        );
    }
}


export default WelcomeComponent