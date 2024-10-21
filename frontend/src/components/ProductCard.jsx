import React from 'react';
import { useCart } from './CartContext';
import '../Styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        console.log("Add to Cart clicked for:", product.name); 
        addToCart(product);
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
