import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'
import Ads from '../components/Ads'
import Ad from '../components/Ad'
import '../styles/Home.css'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://shopstudio.onrender.com');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <Navbar /> 
      <Ad/>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Ads/>
      <Footer/>
    </div>
  );
};

export default Home;
