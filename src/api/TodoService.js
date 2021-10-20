import axios from 'axios';
const API_URL="http://localhost:8080/api/v1/todos"
class TodoService {
  retrieveAllTodos() {
    //console.log('executed service')
    return axios.get(`${API_URL}`);
}

retrieveTodo( id) {
    //console.log('executed service')
    return axios.get(`${API_URL}/${id}`);
}

deleteTodo( id) {
    //console.log('executed service')
    return axios.delete(`${API_URL}/${id}`);
}

updateTodo( id, todo) {
    //console.log('executed service')
    return axios.put(`${API_URL}/${id}`, todo);
}

createTodo( todo) {
    //console.log('executed service')
    return axios.post(`${API_URL}`, todo);
}
}
export default new TodoService();