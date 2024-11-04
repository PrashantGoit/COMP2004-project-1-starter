import React from 'react';
import ProductCard from './ProductCard';

// Container component to display a list of products
// It receives an array of products and a function to handle adding products to the cart
function ProductsContainer({ products, onAddToCart }) {
  return (
    <div className="ProductsContainer">
      {/* Loop through the products array and render a ProductCard for each product */}
      {products.map((product) => (
        // Each ProductCard is given a unique key (product.id) and passed the product details and add-to-cart function
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductsContainer;
