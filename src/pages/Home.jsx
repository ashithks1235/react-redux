import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getAllProducts} from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {

const dispatch = useDispatch()
const {allProducts,loading,error} = useSelector((state)=>state.productReducer)
//console.log(allProducts);
const [currentPage,setCurrentPage] = useState(1)
const productsPerPage = 8
const totalPage = Math.ceil(allProducts?.length/productsPerPage)
const currentPageLastIndex = currentPage * productsPerPage
const currentPageFirstIndex = currentPageLastIndex - productsPerPage
const visibileProductsArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

useEffect(()=>{
  dispatch(getAllProducts())
},[])

const navigateNext = ()=>{
  if(currentPage!=totalPage){
    setCurrentPage(currentPage+1)
  }
}

const navigatePrev = ()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}

  return (
    <>
    <Header/>
    <div className='m-5'>
        {
          loading ?
          <div>
            <img src='https://cdn.dribbble.com/userupload/23605962/file/original-bfd708c69171c0888389409a5ee5e67b.gif' alt='loading'></img>
          </div>
          :
          <div className="row">
        {
          allProducts?.length>0 ?
          visibileProductsArray?.map(product=>(
            <div key={product?.id} className="col-md-3 mb-3">
              <Card>
                <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                <Card.Body className='text-center'>
                  <Card.Title>{product?.title.slice(0,18)}...</Card.Title>
                  <Link to={`/products/${product?.id}/view`} className='btn btn-primary'>View More</Link>
                </Card.Body>
              </Card>
            </div>
          ))
          :
          <p className='fw-bold fs-5'>Product Not Found!!!</p>
        }
        <div className='text-center my-5 '>
          <button className='btn' onClick={navigatePrev}><FontAwesomeIcon icon={faBackward}></FontAwesomeIcon></button>
          {currentPage} of {totalPage}
          <button className='btn' onClick={navigateNext}><FontAwesomeIcon icon={faForward}></FontAwesomeIcon></button>
        </div>
      </div>
        }
    </div>
    </>
  )
}

export default Home