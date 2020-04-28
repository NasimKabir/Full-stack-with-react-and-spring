import axios from 'axios';

class WelcomeService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello')
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }
}
export default new WelcomeService()