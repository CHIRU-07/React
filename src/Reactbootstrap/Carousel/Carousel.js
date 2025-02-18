import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import luffy1 from "../.././assets/luffy1.jpg"
import luffy2 from "../.././assets/luffy2.jpg"
import luffy3 from "../.././assets/luffy3.jpg"



const Carousel1 = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src={luffy1} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={luffy2} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={luffy3} alt=""/>
      </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carousel1
