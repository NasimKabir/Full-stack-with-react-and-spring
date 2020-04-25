import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrivewelcomeMessage = this.retrivewelcomeMessage.bind(this)
    }
    retrivewelcomeMessage() {
        console.log('retrive clicke');
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1>Welcome </h1>
            Welcome {this.props.match.params.name} . Manage your todos <Link to="/todos">Click here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
          <button className="btn btn-primary" onClick={this.retrivewelcomeMessage}>Get</button>
                </div>
            </>
        )
    }
}


export default WelcomeComponent