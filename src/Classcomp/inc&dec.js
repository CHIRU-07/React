import React from 'react'

class Incdec extends React.Component{
       
    constructor(){
        super()
        this.state={
        count:0
        }
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    
  render(){
    return (
        <div style={{textAlign:"center"}}>
           <button onClick={this.decrement}>-</button> 
            {this.state.count}
           <button onClick={this.increment}>+</button>  
        </div>
      )
  }
}

export default Incdec
