import '../Styles/Admin.css';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Admin = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    imageUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert('Product added successfully!');
        setProduct({ name: '', price: '', imageUrl: '', description: '' });
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error(error);
      alert('Error adding product');
    }
  };

  return (
    <div className='Admin'>
      <Navbar/>
    <div className="admin-page">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Admin;
