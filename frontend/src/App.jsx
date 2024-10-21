import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Admin from './Pages/Admin';
import { CartProvider } from './components/CartContext';
import Contact from './Pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
        
          <main>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
             
            </Routes>
          </main>

          
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
