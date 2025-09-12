import React from 'react'
import { Container, Nav, Navbar ,Carousel} from 'react-bootstrap'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary newnavbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt='image1' className='imagelogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/login' className='bg-warning text-black p-3 loginregister  m-1 text-decoration-none'>Login</Link>
             <Link to='/register'  className='bg-warning text-black loginregister  p-3 m-1 text-decoration-none'>Register</Link>
            {/* <Nav.Link href="#" className='bg-dark text-white p-3 fs-6 m-5'>Login</Nav.Link>
            <Nav.Link href="#"  className='bg-dark text-white  p-3 fs-6 m-5'>Register</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
    <h1 className='text-center text-dark my-5'>WELCOME TO SAKSHAM RESTAURANT</h1>
    <p className='text-white mb-5 '>HOTEL ROYAL PALACE located at pratapgarh to ratalam road at dalot in district Pratapgarh Rajasthan since 4 april 2022 is the one of best 2 star hotel in district pratapgarh.Hotel Royal palace is beautifully structured hotel situated in dalot. it is located at 40 km from pratapgarh and 30 km from jaora in MP and 65 km from ratalam.Hotel royal palace is modern budget hotel with affordable prize of room rent and having SASKHAM RESTARUANT.this Restaurant is perfect family Restaurant provide delicious indian dishes and continental food.</p>
     <Carousel className='carousel1'>
      <Carousel.Item>
        <img src="https://postimage.me/images/2025/09/12/rec1-l.jpg" className='img-fluid' alt='image1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://postimage.me/images/2025/09/12/rec2-l.jpg" className='img-fluid'alt='image1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://postimage.me/images/2025/09/12/rec3-l.jpeg" className='img-fluid' alt='image1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://postimage.me/images/2025/09/12/rec4-l.jpg" className='img-fluid' alt='image1'/>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
