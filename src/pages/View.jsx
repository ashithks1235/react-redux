import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'

function View() {
// get path parameter from url
const {id} = useParams()
//console.log(id);
//state to store product details
const [product,setProduct] = useState({})
const dispatch = useDispatch()
const userWishlist = useSelector(state=>state.wishlistReducer)
//console.log(product);


useEffect(()=>{
  getProductDetails()
},[])

const getProductDetails = ()=>{
  const allProducts = JSON.parse(sessionStorage.getItem('products'))
  setProduct(allProducts.find(item=>item.id==id))
}

const handleAddToWishlist = ()=>{
  const existingProduct = userWishlist?.find(item=>item.id==id)
  if(existingProduct){
    Swal.fire({
  title: 'Error!',
  text: 'sorry!! product already in your wishlist',
  icon: 'error',
  confirmButtonText: 'Cool'
})
  }else{
    dispatch(addToWishlist(product))
  }
}

  return (
    <>
      <Header/>
      <div className='container'>
        <div className="row align-items-center" style={{height:'90vh'}}>
          <div className="col-md-6 text-center">
            <img className='img-fluid' src={product?.thumbnail} alt=""></img>
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleAddToWishlist} className='btn btn-primary'>ADD TO WISHLIST</button>
              <button className='btn btn-primary'>ADD TO CART</button>
            </div>
          </div>
          <div className='col-md-6'>
            <h1>{product?.title}</h1>
            <h4 className='text-danger'>{product?.price}</h4>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <h4>Description : {product?.description}</h4>
            <h5 className='fw-bold'>Client Review : </h5>
            {
              product?.reviews?.length>0 &&
              product?.reviews?.map((item,index)=>(
                <div key={index} className='my-2 border border rounded shadow p-5'>
              <p><span className='fw-bold'>{item.reviewerName} : </span>{item.comment}</p>
              <p>rating : {item.rating}<FontAwesomeIcon icon={faStar} /></p>
            </div>
              ))
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default View