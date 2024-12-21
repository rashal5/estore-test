import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Products from './components/Products'
import Products2 from './components/Newcollections'
import Footer from './components/Footer'
import Recentproducts from './components/RecentProducts'
import Signin from './components/Signin'
import {Routes,Route} from 'react-router-dom'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<><Hero/> <Products/> <Products2/> <Recentproducts/> <Signin/></>} />
      <Route path="/products" element={<><Products/> <Recentproducts/></>} />
      <Route path="/about" element={<Products2/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App