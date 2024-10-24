import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://shopstudio.onrender.com')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="products-container">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
