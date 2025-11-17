import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { faCartPlus, faHeartCircleXmark, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Wishlist() {

const userWishlist = useSelector(state=>state.wishlistReducer)

  return (
    <>
    <Header/>
    <div className='my-5 container'>
      {
        userWishlist?.length>0 ?
        <>
        <h1>Wishlist</h1>
        <div className="row">
        {
          userWishlist?.map(product=>(
            <div key={product?.id} className="col-md-3 mb-3">
           <Card>
            <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
            <Card.Body className='text-center'>
              <Card.Title>{product?.title}</Card.Title>
              <div className="d-flex justify-content-evenly">
                <button className='btn text-danger'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className='btn text-sucess'><FontAwesomeIcon icon={faCartPlus} /></button>
              </div>
            </Card.Body>
          </Card>
        </div>
          ))
        }
      </div>
      </>
      :
      <div>
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png' alt='empty cart'></img>
        <h3>Your wishlist is empty</h3>
        <Link to={'/'} className='btn btn-primary'>shop more</Link>
      </div>
      }
    </div>
    </>
  )
}

export default Wishlist