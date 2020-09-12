import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import "./ArrowCarousal.css"
class ArrowCarousal extends Component {
    render() {
        return (
            <div>
                <Carousel className="carousel-container">
  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      alt="First slide"
    /> */}
    <Carousel.Caption>
      <h3>First slide label</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    /> */}

    <Carousel.Caption>
      <h3>Second slide label</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      alt="Third slide"
    /> */}

    <Carousel.Caption>
      <h3>Third slide label</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default ArrowCarousal
