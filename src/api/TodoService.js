import axios from 'axios';

class TodoService {
  retriveAllUsers() {
    return axios.get('http://localhost:8080/users')
  }
  deleteUsers(id) {
    return axios.delete(`http://localhost:8080/users/${id}`)
  }
}
export default new TodoService();