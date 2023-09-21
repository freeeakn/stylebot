// import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader.jsx'
import AppCatalog from './components/AppCatalog.jsx';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <AppHeader />
      <div className=' mt-[88px] mx-4'>
        <Routes>
          <Route index path="/" element={<AppCatalog />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
