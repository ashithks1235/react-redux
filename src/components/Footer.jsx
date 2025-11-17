import { faFacebook, faGithub, faInstagram, faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTruckFast,faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-body-tertiary pt-5'>
      <div className="row text-center text-md-start">
        <div className='col-md-4 mb-4'>
          <h5><FontAwesomeIcon icon={faTruckFast} className='me-2 text-dark'/>DailyCart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className='col-md-2 mb-4'>
          <h5>Links</h5>
          <ul className='list-unstyled'>
            <li><Link to={'/'} className='text-decoration-none'>Home</Link></li>
            <li><Link to={'/wishlist'} className='text-decoration-none'>Wishlist</Link></li>
            <li><Link to={'/cart'} className='text-decoration-none'>Cart</Link></li>
          </ul>
        </div>
        <div className='col-md-2 mb-4'>
          <h5>Guides</h5>
          <ul className='list-unstyled'>
            <li><Link className='text-decoration-none'>React</Link></li>
            <li><Link className='text-decoration-none'>React Bootstrap</Link></li>
            <li><Link className='text-decoration-none'>React Router</Link></li>
          </ul>
        </div>
        <div className='col-md-4 mb-4'>
          <h5>Contact Us</h5>
          <div className='input-group'>
            <input type='email' className='form-control' placeholder='Enter your Email here'></input>
            <button className='btn btn-light'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          <div className='pt-2'>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className='me-4'/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className='me-4'/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='me-4'/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className='me-4'/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} className='me-4'/></a>
            <a href="#"><FontAwesomeIcon icon={faPhone} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer