import React, { useEffect, useState } from 'react';
import { useCart } from '../components/CartContext';
import '../Styles/Cart.css';
import Navbar from '../components/Navbar';
import Ad from '../components/Ad';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', address: '' });
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('https://shopstudio.onrender.com/api/cart');
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
      await fetch(`https://shopstudio.onrender.com/api/cart/${itemId}`, {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
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
          <div className="checkout-container">
            <div className="left-side">
              {/* Cart Summary */}
              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                <p>Total Price: ₹{cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0).toFixed(2)}</p>

                {/* User Information */}
                <div className="user-info">
                  <h3>User Information</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userInfo.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={userInfo.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="right-side">
              {/* Payment Method Selection */}
              <div className="payment-method">
                <h3>Select Payment Method</h3>
                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="paypal">Cash on Delivery</option>
                  <option value="netBanking">Net Banking</option>
                </select>
                <h3>Have a Coupon?</h3>
                <input type="text" placeholder="Enter your coupon code"  />
                <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
              <div className="coupon-section">
            
            
          </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
