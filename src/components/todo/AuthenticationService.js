class AuthenticationService {
    registerSuccesfulLogin(username) {
        console.log("Register login successful");
        sessionStorage.setItem('authnticatedUser', username);
    }
    logout() {
        sessionStorage.removeItem('authnticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authnticatedUser');
        if (user === null) return false
        return true
    }
}
export default new AuthenticationService()