import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError('Error fetching product: ' + error.message);
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

 
  const handleAddToCart = async () => {
    if (product) {
      const productWithId = { ...product, id: product._id };
      addToCart(productWithId);
  
      try {
        const response = await fetch('https://shopstudio.onrender.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: product._id,
            quantity: 1,
          }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error adding to cart: ${errorData.message || response.status}`);
        }
  
        const savedCartItem = await response.json(); 
        alert(`${product.name} has been added to the cart!`);
      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Failed to add to cart');
      }
    }
  };
  

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
