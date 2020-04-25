import React,{ Component } from "react";
class Counter extends Component {
   constructor(props){
       super(props)
       this.state={
        counter:100
    }
   }
    increment=()=>{
        this.setState({
            counter:this.state.counter+100})
    }

    decrement=()=>{
        this.setState({
            counter:this.state.counter-100})
    }
    render(){
        return(
            <div className="counter">
               <button onClick={this.decrement}>-</button><span>{this.state.counter}</span>
               <button onClick={this.increment}>+</button>
            </div>
        )
    }
  }

  
  export default Counter;
  