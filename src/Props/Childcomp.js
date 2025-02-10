import React from 'react'

const Childcomp = (info) => {
   return(
    // <div>
    //     <img src={info.img} alt="" width="100"/>
    //     <p>{info.title}</p>
    //     <span>{info.price}</span>

    // </div>

    <div>
        {
        info.data.map(x=>{
            return(
                <div>
                    <img src={x.image} alt="" width="100"/>
                <p>{x.title}</p>
                <span>{x.price}</span>
                </div>
            )
        })

        
        
        
        }
        
    </div>
   )
  
}

export default Childcomp
