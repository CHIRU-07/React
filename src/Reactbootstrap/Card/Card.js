import React from 'react'
import data from "../../Data/data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Card1 = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"20px",flexWrap:'wrap'}}>
     {data.map(item=>{
        return(
            <Card style={{ width: '20rem',height:"28rem"}}>
            <Card.Img variant="top" src={item.image} style={{height:"60%"}}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.price}
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        )
     })}
    </div>
  )
}

export default Card1
