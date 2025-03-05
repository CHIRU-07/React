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
        <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",padding:"20px"}} >
           <button onClick={this.decrement} style={{fontSize:"1.5rem" ,padding:10}}>-</button> 
            <p style={{fontSize:"1.5rem" ,padding:10}} >{this.state.count}</p>
           <button onClick={this.increment} style={{fontSize:"1.5rem" ,padding:10}}>+</button>  
        </div>
      )
  }
}

export default Incdec
