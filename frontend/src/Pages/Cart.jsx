import React, { useEffect, useState } from 'react';
import { useCart } from '../components/CartContext';
import '../Styles/Cart.css';
import Navbar from '../components/Navbar';
import Ad from '../components/Ad'

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'DELETE',
      });
      setCartItems(cartItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleCheckout = () => {
    alert('Order Successful!');
  };

  return (
    <div className='cart'>
      <Navbar />
      <div className='cart-container'>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <a href="/Home">Continue Shopping</a>
          </div>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <img src={item.productId.imageUrl} alt={item.productId.name} />
                <div className="item-details">
                  <h4>{item.productId.name}</h4>
                  <p>₹{item.productId.price} x {item.quantity}</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            <p>Total Price: ₹{cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0).toFixed(2)}</p>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
