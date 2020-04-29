import React, { Component } from "react";
import TodoService from "../../api/TodoService";
import moment from 'moment';

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: null,
            users: []
        }
        this.updateUser=this.updateUser.bind(this)
        this.addnewUser=this.addnewUser.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
    }

    componentDidMount() {
        this.refreshUser()
    }

    refreshUser() {
        TodoService.retriveAllUsers().then((response) => {
            this.setState({
                users: response.data
            })
        })
            .catch((error) => {
                console.log(error)
            })
    }

    addnewUser(){
        this.props.history.push(`/users/-1`)
    }

    updateUser(id) {
        console.log(id)
        this.props.history.push(`/users/${id}`)

    }

    deleteUser(id) {
        //console.log(id)
        TodoService.deleteUsers(id)
            .then(response => {
                this.setState({ message: `Delete of user ${id}` })
                this.refreshUser()
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        return (
            <div className="container">

                <h1>List Todos</h1>
                <div>
                    <button className="btn btn-primary" onClick={this.addnewUser}>Add New user</button>
                </div>

                <br></br>

                {this.message && <div className="alert alert-success">{this.message}</div>}
                <table className="table table-lg">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>TargetDate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{moment(user.date).format('YYYY-MM-DD')}</td>
                                    <td><button onClick={() => this.updateUser(user.id)} className="btn btn-primary">Update</button>
                                        <button onClick={() => this.deleteUser(user.id)} className="btn btn-warning">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodosComponent