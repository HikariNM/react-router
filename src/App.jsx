import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ProductDetailsPage from './pages/ProductDetailsPage'
import DefaultLayout from './layout/DefaultLayout'
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return <BrowserRouter>
    <Routes>
      {/* Passes setSearchTerm to DefaultLayout as the "onSearch" prop */}
      <Route element={<DefaultLayout onSearch={setSearchTerm} />}>
        <Route path='/' Component={HomePage} />
        <Route path='/aboutus' Component={AboutUs} />
        {/* Passes searchTerm to Products as a prop */}
        <Route path='/products' element={<Products searchTerm={searchTerm} />} />
        <Route path='/products/:id' Component={ProductDetailsPage} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
