import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AppHeader from './components/AppHeader.jsx'
import AppCatalog from './components/AppCatalog.jsx';
import AppFooter from './components/AppFooter.jsx';
import AppMain from './components/AppMain.jsx';

function App() {

  let i = 0;

  const [cart, setCart] = useState([
    {
        id: i++,
        title: 'Sweater2',
        img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
        desc: 'lorem ipdssum dolor sits amet, consectetur',
        category: 'sweater',
        price: '50.99',
    },
    {
        id: i++,
        title: 'Sweater2',
        img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
        desc: 'lorem ipdssum dolor sits amet, consectetur',
        category: 'sweater',
        price: '50.99',
    },
])

  return (
    <>
      <BrowserRouter>
        <AppHeader cartArr={cart} cartSetter={setCart}/>
        <div className='parallax'>
          <div className=' mt-24 mx-4'>
            <Routes>
              <Route index path="/" element={<AppMain />} />
              <Route path="/catalog" element={<AppCatalog cart={cart} cartSetter={setCart}/>} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
