import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ProductDetailsPage from './pages/ProductDetailsPage'
import DefaultLayout from './layout/DefaultLayout'
import './App.css'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path='/' Component={HomePage} />
        <Route path='/aboutus' Component={AboutUs} />
        <Route path='/products' Component={Products} />
        <Route path='/products/:id' Component={ProductDetailsPage} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
