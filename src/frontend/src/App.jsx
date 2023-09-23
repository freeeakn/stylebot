import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AppHeader from './components/AppHeader.jsx'
import AppCatalog from './components/AppCatalog.jsx';
import AppFooter from './components/AppFooter.jsx';
import AppMain from './components/AppMain.jsx';

function App() {

  let i = -1;
    const [items, setItems] = useState([
        {
            id: i++,
            count: 1,
            title: 'Tshort',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sit amet, consectetur',
            category: 'Tshort',
            price: '12.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Tshort2',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '11.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Tshort3',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '10.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'sweater',
            price: '25.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Tshort',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sit amet, consectetur',
            category: 'Tshort',
            price: '12.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Tshort2',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '11.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Tshort3',
            img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=750',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'Tshort',
            price: '10.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipsum dolor sits amet, consectetur',
            category: 'sweater',
            price: '25.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        {
            id: i++,
            count: 1,
            title: 'Sweater2',
            img: 'https://www.fjallraven.com/4a1b9e/globalassets/catalogs/fjallraven/f8/f818/f81829/f555/ovik_knit_sweater_m_81829-555_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=100',
            desc: 'lorem ipdssum dolor sits amet, consectetur',
            category: 'sweater',
            price: '50.99',
        },
        
    ])

  const [cart, setCart] = useState([ ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    let temp = [];
    for (let i = 0; i < cart.length; i++) {
      if (item != cart[i])
        temp.push(cart[i])
    }
    setCart(temp)
  };

  return (
    <>
      <BrowserRouter>
        <AppHeader cartArr={cart} cartSetter={setCart} rmItem={removeFromCart}/>
        <div className='parallax'>
          <div className=' mt-24 mx-4'>
            <Routes>
              <Route index path="/" element={<AppMain />} />
              <Route path="/catalog" element={<AppCatalog items={items} itemsSetter={setItems} onAdd={addToCart}/>} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
