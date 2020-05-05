import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLogged = AuthenticationService.isUserLoggedIn();
        console.log('loged in user '+isUserLogged)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {isUserLogged && <li><Link className="nav-link" to="/welcome/nasim">Home</Link></li>}
                        {isUserLogged && <li><Link className="nav-link" to="/users">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogged && <li><a className="nav-link" href="/login">Login</a></li>}
                        {isUserLogged && <li><a className="nav-link" href="/logout" onClick={AuthenticationService.logout}>Logout</a></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent