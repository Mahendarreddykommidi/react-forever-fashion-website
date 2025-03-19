
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Placeorders from './pages/Placeorders'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Footer from './components/Footer'
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer/>
      <div className="px-4 sm:px-[5vw] md:px-[7w] lg:px-[9vw]">
        <Navbar />
        <Searchbar/>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/placeorders' element={<Placeorders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/collections' element={<Collection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:productid' element={<Product />} />
          <Route path='/contact' element={<Contact />} />



        </Routes>
        <Footer/>
        

      </div>

    </>
  )
}

export default App
