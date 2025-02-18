import React from 'react'
import "./listrenderusingClass.css"


class ListrnderusingClass extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
            data:[]
        }
    }
    componentDidMount(){
        let c=async()=>{
            let a = await fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({data:res.users})
        }).catch(err=>console.log(err))
        // console.log(a)
        }
        console.log(c())
       }
    
     render(){
        console.log(this.state.data)
        return(
            <div className='parent'>
                {this.state.data.map(x=>{
                    return(
                        <div className='card'>
                            <img src={x.image}/>
                            <p className='name'>Name: {x.lastName}</p>
                            <p>Birth_Date: {x.birthDate}</p>
                            <p>BloodGroup: {x.bloodGroup}</p>
                            <p>email: {x.email}</p>
                            <p>gender: {x.gender}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListrnderusingClass