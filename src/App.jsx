import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/products/:id/view' element={<View/>}></Route>
        <Route path='/*' element={<Pnf/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
