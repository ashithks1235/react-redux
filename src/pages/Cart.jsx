import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <>
    <Header/>
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
                <tr>
                  <td>1</td>
                  <td>name</td>
                  <td><img width={'50px'} height={'50px'} src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' alt=''></img></td>
                  <td>
                    <div className='d-flex'>
                      <button className='btn fs-3'>-</button>
                      <input style={{width:'50px'}} type='text' value={0} className='form-control' readOnly></input>
                      <button className='btn fs-3'>+</button>
                    </div>
                  </td>
                  <td>$ 299</td>
                  <td><button className='btn'><FontAwesomeIcon icon={faTrash} className='text-danger' /></button> </td>
                </tr>
              </tbody>
            </table>
            <div className='float-end mt-3'>
              <button className='btn btn-danger me-5'>EMPTY CART</button>
              <Link to={'/'} className='btn btn-primary'>SHOP MORE</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-5 rounded shadow">
              <h3>Total Amount: <span className='text-danger'>$ 19.99</span></h3>
              <hr/>
              <div className="d-grid">
                <button className='btn btn-success'>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart