import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { CiShoppingCart } from "react-icons/ci";
import Badge from 'react-bootstrap/Badge';
import "./Navbar.css"

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="success" expand="md" className='navbar'>
        
        <Navbar.Brand href="#home">Vamsi Mart</Navbar.Brand>
        <Navbar.Toggle > </Navbar.Toggle>
          <Navbar.Collapse id='navbarcollapse'>
          <Nav style={{gap:"15px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Button variant="light">Log In</Button>
            <Button variant="dark">
                <CiShoppingCart size={25}/>
                <Badge bg="secondary" style={{top:-10}}>9</Badge>
                </Button>

            

          </Nav>
          </Navbar.Collapse>
         
        
        
      </Navbar>
      <br />
    </>
  )
}

export default Navbar1
