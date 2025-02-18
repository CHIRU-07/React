import React from 'react'

class Loginshow extends React.Component{
    constructor(){
        super()
        this.state={
            loginshow:false,
            color:"green"
        }
    }
    changelogin=()=>{
        this.setState({loginshow:!this.state.loginshow})
        

        
    }
  render(){
    return (
        <div style={{backgroundColor:this.state.color ,padding:"20px"}}>
           <button onClick={this.changelogin}>Login here</button>
          {this.state.loginshow && <div>
            <input/>
            <input/>
            <input/>
            <input/>


           </div> }
           <button onClick={()=>this.setState({color:this.state.color='red'})}>Red</button>
           <button onClick={()=>this.setState({color:this.state.color='yellow'})}>Yellow</button>
           <button onClick={()=>this.setState({color:this.state.color='purple'})}>Purple</button>

        </div>
      )
  }
}

export default Loginshow
