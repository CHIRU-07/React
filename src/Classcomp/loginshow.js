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
        <div style={{backgroundColor:this.state.color ,display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",padding:"30px"}}>
           <button onClick={this.changelogin} style={{fontSize:"1.1rem",padding:"7px 10px"}}>Login here</button>
          {this.state.loginshow && <div>
            <input/>
            <input/>
            <input/>
            <input/>


           </div> }
           <button onClick={()=>this.setState({color:this.state.color='red'})} style={{fontSize:"1.1rem",padding:"7px 10px"}}>Red</button>
           <button onClick={()=>this.setState({color:this.state.color='yellow'})} style={{fontSize:"1.1rem",padding:"7px 10px"}}>Yellow</button>
           <button onClick={()=>this.setState({color:this.state.color='purple'})} style={{fontSize:"1.1rem",padding:"7px 10px"}}>Purple</button>

        </div>
      )
  }
}

export default Loginshow
