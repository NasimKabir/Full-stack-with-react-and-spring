import React, { useState } from "react";
import AuthenticationService from './AuthenticationService'
import '../App.css';

const LoginComponent = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChangeUsername = (e) => {
       const  username = e.target.value;
        setUsername(username);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
    
    const loginClicked = (event) => {
        event.preventDefault();
        AuthenticationService
            .executeJwtAuthenticationService(username, password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.accessToken)
                props.history.push(`/todos`)
            }).catch(
            error => {
                const errorMessage="Can not signin successfully ! Please check username/password again";
               console.log("Login fail: error = { " + error.toString() + " }");
                setError(errorMessage); 
             } )

    }
    return (
        <div>
            {error && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          )}
            <form className="form-signin" onSubmit={loginClicked}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label  className="sr-only">Username</label>
                <input type="text"  className="form-control" required onChange={onChangeUsername} />
                <label  className="sr-only">Password</label>
                <input type="password"  className="form-control"  required onChange={onChangePassword} />
                <button className="btn btn-lg btn-primary btn-block"  >Sign in</button>
            </form>
        </div>
    )
}

export default LoginComponent
