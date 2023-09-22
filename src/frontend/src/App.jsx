// import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AppHeader from './components/AppHeader.jsx'
import AppCatalog from './components/AppCatalog.jsx';
import AppFooter from './components/AppFooter.jsx';
import AppMain from './components/AppMain.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <div className='parallax'>
          <div className=' mt-24 mx-4'>
            <Routes>
              <Route index path="/" element={<AppMain />} />
              <Route path="/catalog" element={<AppCatalog />} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
