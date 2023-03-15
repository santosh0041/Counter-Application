import React, { Component } from 'react'
import "./gobal16.css"

export default class App16 extends Component {
    constructor()
    {
        super()
        this.state={count:0}
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
        
      <div className='mainBlock'>
        <h1>{this.state.count}</h1>
        <div className='btngroup'>
        <button onClick={this.handleIncrement}>+ Increment</button>
        <button onClick={this.handleDecrement}>- Decrement</button>
        <button onClick={this.handleReset}>RESET</button>
        </div>
        </div>
        
    )
  }
}
