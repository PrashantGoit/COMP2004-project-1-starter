import React, { useState } from 'react';
import NavBar from './NavBar'; // Importing the navigation bar component
import ProductsContainer from './ProductsContainer'; // Importing the container that displays products
import CartContainer from './CartContainer'; // Importing the container that displays cart items
import products from '../data/products'; // Importing the product data

// Main container component for the groceries app, holding state and logic for cart functionality
function GroceriesAppContainer() {
  // State to store the items in the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product exists, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      // If product doesn't exist in the cart, add it with its initial quantity
      return [...prevCart, { ...product, quantity: product.quantity }];
    });
  };

  // Function to handle changing the quantity of a product in the cart
  const handleQuantityChange = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Function to handle removing a specific item from the cart
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to empty the entire cart
  const handleEmptyCart = () => setCart([]);

  return (
    <div>
      {/* Navigation bar component with cart item count as a prop */}
      <NavBar cartCount={cart.length} />
      
      <div className="GroceriesApp-Container">
        {/* Container for displaying available products with an add-to-cart functionality */}
        <ProductsContainer products={products} onAddToCart={handleAddToCart} />
        
        {/* Container for displaying cart items with options to remove, change quantity, or empty the cart */}
        <CartContainer
          cartItems={cart}
          onRemoveItem={handleRemoveItem}
          onQuantityChange={handleQuantityChange}
          onEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}

export default GroceriesAppContainer;