import React from 'react'
import { Navbar,Container,Nav,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast,faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function Header() {
  // to get wishlist count from store
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none fw-bold text-dark'>
        <FontAwesomeIcon icon={faTruckFast} className='me-2 text-dark'/>DailyCart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/wishlist" className="fw-bold">
            <FontAwesomeIcon icon={faHeart} className='me-2' />
            WISHLIST <Badge bg="secondary" className='ms-1'>{userWishlist.length}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="fw-bold">
            <FontAwesomeIcon icon={faCartShopping} className='me-2' />
            CART <Badge bg="secondary" className='ms-1'>0</Badge>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header