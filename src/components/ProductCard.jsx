import React, { useState } from 'react';

// Component that displays a single product, lets user adjust quantity, and add it to the cart
function ProductCard({ product, onAddToCart }) {
  // State to keep track of the quantity selected by the user
  const [quantity, setQuantity] = useState(0);

  // Function to increase the quantity by 1
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Function to decrease the quantity by 1, but not go below 0
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 0));

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    // Check if quantity is greater than 0 before adding to cart
    if (quantity > 0) {
      // Add the product with the selected quantity to the cart
      onAddToCart({ ...product, quantity });
      // Reset quantity back to 0 after adding to the cart
      setQuantity(0);
    } else {
      // Show alert if user tries to add to cart with 0 quantity
      alert('Please add quantity before adding to cart.');
    }
  };

  return (
    <div className="ProductCard">
      {/* Display product image */}
      <img src={product.image} alt={product.productName} />
      
      {/* Display product name */}
      <h3>{product.productName}</h3>

      {/* Display product brand */}
      <p>{product.brand}</p>

      {/* Quantity control buttons */}
      <div className="ProductQuantityDiv">
        <button className="QuantityBtn" onClick={decreaseQuantity}>-</button> {/* Decrease quantity */}
        <span>{quantity}</span> {/* Show current quantity */}
        <button className="QuantityBtn" onClick={increaseQuantity}>+</button> {/* Increase quantity */}
      </div>

      {/* Display product price */}
      <p>{product.price}</p>

      {/* Button to add the product with the selected quantity to the cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;