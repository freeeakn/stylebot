// import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader.jsx'
import AppCatalog from './components/AppCatalog.jsx';
import AppFooter from './components/AppFooter.jsx';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <div className='parallax'>
          <div className=' mt-28 mx-4'>
            <Routes>
              <Route index path="/" element={<AppCatalog />} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
