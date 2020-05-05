import axios from 'axios'
class AuthenticationService {


    basicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/hello',
         { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }


    registerSuccesfulLogin(username, password) {
        //  let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        //  console.log("Register login successful");
        sessionStorage.setItem('authnticatedUser', username);
        this.setUpAxiosInterceptors(this.createBasicAuthToken(username, password))
    }


    logout() {
        sessionStorage.removeItem('authnticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authnticatedUser');
        if (user === null) return false
        return true
    }

    setUpAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use((config) => {
            if (this.isUserLoggedIn()) {
                config.headers.authorization = basicAuthHeader
            }
            return config
        })
    }
}
export default new AuthenticationService()