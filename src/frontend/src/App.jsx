import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import './App.css';
import AppHeader from './components/AppHeader.jsx'
import AppCatalog from './components/AppCatalog.jsx';
import AppFooter from './components/AppFooter.jsx';
import AppMain from './components/AppMain.jsx';
import AppItem from './components/popup/AppItem.jsx';
import AppAi from './components/AppAi';

function App() {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentItems, setCurrentItems] = useState([...items]);
  const [isLoading, setIsLoading] = useState(false);

  const [showItem, setShowItem] = useState(false);

  const [fullItem, setFullItem] = useState({});
  useEffect(() => {
      fetchItems()
  }, []);

  const fetchItems = async () => {
      setIsLoading(true);
      const {data} = await axios.get('http://127.0.0.1:8000/api/v1/items');
      setItems(data);
      setIsLoading(false);
  };

  const addToCart = (item) => {
    let isInArray = false;
    let temp = [];
    cart.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        isInArray = true;
        cartItem.count++;
      }
      temp.push(cartItem);
    });
    if (!isInArray)
      setCart([...cart, item]);
    else
      setCart(temp);
  };

  const removeFromCart = (item) => {
    let temp = [];
    for (let i = 0; i < cart.length; i++) {
      if (item.id != cart[i].id) {
        temp.push(cart[i])
      } else if (cart[i].count > 1) {
        cart[i].count--;
        temp.push(cart[i]);
      }
    }
    setCart(temp)
  };

  const sumCart = () => {
    let summary = 0;
    cart.forEach(cartItem => summary += Number.parseFloat(cartItem.price) * Number.parseInt(cartItem.count));
    return summary.toFixed(2);
  }

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter(item => item.categories.map(cat => cat.key).includes(category)));
    }
  }

  const onShowItem = (item) => {
    setFullItem(item);
    setShowItem(!showItem);
  };

  return (
    <>
      <BrowserRouter>
        {
          isLoading ?
          <div className="relative flex justify-center items-center">
            <div className="fixed top-[40%]">
              <div className="loader"></div>
              <h2 className=' mt-3'>Loading...</h2>
            </div>
          </div> :
          <>
          <AppHeader cartArr={cart} cartSetter={setCart} rmItem={removeFromCart} sumCart={sumCart}/>
          <AnimatePresence>
            {showItem && <AppItem onShowItem={onShowItem} item={fullItem} onAdd={addToCart}/>}
          </AnimatePresence>
          <div className='parallax'>
            <div className=' mt-24 mx-4'>
              <Routes>
                <Route index path="/" element={<AppMain />} />
                <Route path="/catalog" element={<AppCatalog onShowItem={onShowItem} chooseCategory={chooseCategory} allItems={items} items={currentItems} itemsSetter={setItems} onAdd={addToCart}/>} />
                <Route path="/ai" element={<AppAi/>} />
              </Routes>
            </div>
            <AppFooter />
          </div>
          </>
        }
      </BrowserRouter>
    </>
  )
}

export default App
