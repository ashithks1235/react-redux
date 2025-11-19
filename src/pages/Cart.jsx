import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, incrementCartItem, removeCartItem,emptyCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Cart() {

const navigate = useNavigate()
const userCart = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
const [sum,setSum] = useState(0)

useEffect(()=>{
  setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
},[userCart])

const handleDecrementCart = (product)=>{
  if(product.quantity>1){
    dispatch(decrementCartItem(product.id))
  }else{
    dispatch(removeCartItem(product.id))
  }
}

const checkout = ()=>{
  Swal.fire({
    title: 'shopping completed!',
    text: 'thank you for shopping with us',
    icon: 'sucess',
    confirmButtonText: 'OK'
    })
    dispatch(emptyCart())
    Navigate('/')
}

  return (
    <>
    <Header/>
      {
        userCart?.length>0 ?
        <div className='container'>
        <h1 className='my-5'>Cart Summary</h1>
        <div className="row mb-5">
          <div className="col-md-8 border rounded">
            <table className='table table-stripped'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>products</th>
                  <th>image</th>
                  <th>quantity</th>
                  <th>price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  userCart?.map((product,index)=>(
                    <tr>
                  <td>{index+1}</td>
                  <td>{product?.title}</td>
                  <td><img width={'50px'} height={'50px'} src={product?.thumbnail} alt=''></img></td>
                  <td>
                    <div className='d-flex'>
                      <button onClick={()=>handleDecrementCart(product)} className='btn fs-3'>-</button>
                      <input style={{width:'50px'}} type='text' value={product?.quantity} className='form-control' readOnly></input>
                      <button onClick={()=>dispatch(incrementCartItem(product?.id))} className='btn fs-3'>+</button>
                    </div>
                  </td>
                  <td>$ {product?.totalPrice}</td>
                  <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn'><FontAwesomeIcon icon={faTrash} className='text-danger' /></button> </td>
                </tr>
                  ))
                  }
              </tbody>
            </table>
            <div className='float-end mt-3'>
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-5'>EMPTY CART</button>
              <Link to={'/'} className='btn btn-primary'>SHOP MORE</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-5 rounded shadow">
              <h3>Total Amount: <span className='text-danger'>$ {sum}</span></h3>
              <hr/>
              <div className="d-grid">
                <button onClick={checkout} className='btn btn-success'>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    :
    <div>
            <img src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png' alt='empty cart'></img>
            <h3>Your cart is empty</h3>
            <Link to={'/'} className='btn btn-primary'>shop more</Link>
          </div>  
    }
    </>
  )
}

export default Cart