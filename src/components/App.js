import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './todo/LoginComponent';
import WelcomeComponent from './todo/WelcomeComponent';
import ErrorComponent from './todo/ErrorComponent';
import ListTodosComponent from './todo/ListTodosComponent';
import HeaderComponent from './todo/HeaderComponent';
import FooterComponent from './todo/FooterComponent';
import LogoutComponent from './todo/LogoutComponent';
import AuthenticatedRoute from './todo/AuthenticatedRoute'
import UserComponent from './todo/UserComponent';

class App extends Component{
  render() {
    return (
        <div className="App">
            <Router>
                <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/users/:id" component={UserComponent}/> 
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </>
            </Router>
            
        </div>
    )
}
}

export default App;
