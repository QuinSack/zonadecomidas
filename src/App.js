import './App.css';
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import {Routes, Route} from 'react-router-dom'
import BreakfastMeals from './components/BreakfastMeals';
import LunchMeals from './components/LunchMeals';
import SideMeals from './components/SideMeals';
import Desserts from './components/Desserts';
import Smoothies from './components/Smoothies';
import { useState } from 'react';


function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (lun) => {
    const exist = cartItems.find(x => x.id === lun.id);
    if (exist){
      setCartItems(cartItems.map(x => x.id === lun.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItems([...cartItems, {...lun, qty: 1}])
    }
  }

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} onAdd={onAdd}/>}/>
          <Route path='/aboutus' element={<About />}/>
          <Route path='/contactus' element={<Contact />}/>
          <Route path='/careers' element={<Careers />}/>
          <Route path='/shop/breakfastmeals' element={<BreakfastMeals />}/>
          <Route path='/shop/lunchmeals' element={<LunchMeals onAdd={onAdd}/>} />
          <Route path='/shop/sidemeals' element={<SideMeals />} />
          <Route path='/shop/desserts' element={<Desserts />} /> 
          <Route path='/shop/smoothies' element={<Smoothies />} />
        </Routes>     
    </div>
  );
}

export default App;
