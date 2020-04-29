import axios from 'axios';

class TodoService {
  retriveAllUsers() {
    return axios.get('http://localhost:8080/users')
  }

  findbyUsers(id) {
    return axios.get(`http://localhost:8080/users/${id}`)
  }

  updateUser(id,user) {
    return axios.put(`http://localhost:8080/users/${id}`,user)
  }

  addUser(id,user) {
    return axios.post(`http://localhost:8080/users/`,user)
  }


  deleteUsers(id) {
    return axios.delete(`http://localhost:8080/users/${id}`)
  }
}
export default new TodoService();