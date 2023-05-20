import './App.css';
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/aboutus' element={<About />}/>
        <Route path='/contactus' element={<Contact />}/>
        <Route path='/careers' element={<Careers />}/>
      </Routes>
    </div>
  );
}

export default App;
