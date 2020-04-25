import React,{ Component } from "react";

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:
                [
                    {id:1,description:'Learn React',done:false,targetDate:new Date()},
                    {id:2,description:'Learn Java',done:false,targetDate:new Date()},
                    {id:3,description:'Learn Spring Boot',done:false,targetDate:new Date()},
                    {id:4,description:'Learn Jpa',done:false,targetDate:new Date()},
                    {id:5,description:'Learn Mysql',done:false,targetDate:new Date()}
                ]
        }
    }
    render(){
        return(
              <div className="container">
                    <h1>List Todos</h1>
                    <table className="table table-lg">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Done</th>
                                <th>TargetDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    this.state.todos.map(todo =>
                                                        <tr key={todo.id}>
                                                            <td>{todo.id}</td>
                                                            <td>{todo.description}</td>
                                                            <td>{todo.done.toString()}</td>
                                                            <td>{todo.targetDate.toString()}</td>
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