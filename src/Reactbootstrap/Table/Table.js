import data from "../../Data/data"
import Table from 'react-bootstrap/Table';

import React from 'react'

const Table1 = () => {
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item=>{
           return(
            <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td><img src={item.image} style={{width:"50px"}} alt=""/></td>
          </tr>
           )
        })}
       </tbody>
    </Table>
    </>
  )
}

export default Table1
