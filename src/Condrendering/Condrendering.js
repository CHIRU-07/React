import React from 'react'

const Condrendering = ({islogged}) => {
  if (islogged){
    return(
        <h1>WElcome User</h1>
    )
    }
    else{
        return(
           <h1> Please Login </h1>
        )
    }
}

export default Condrendering
