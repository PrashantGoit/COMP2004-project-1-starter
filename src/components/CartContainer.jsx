// This is the CartContainer component - it displays all items in the cart and provides options to change quantities, remove items, or empty the cart.
import React from 'react';
import CartCard from './CartCard';

function CartContainer({ cartItems, onRemoveItem, onQuantityChange, onEmptyCart }) {
  // Calculate the total amount by adding up each item's price multiplied by its quantity
  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, '')) || 0; // Parse item price to ensure it's a number
    return total + itemPrice * item.quantity; // Add item total to overall total
  }, 0);

  return (
    <div className="CartContainer">
      <h3>Cart items: {cartItems.length}</h3> {/* Show count of items in the cart */}
      
      {/* If the cart is empty, display a message; otherwise, show the cart items */}
      {cartItems.length === 0 ? (
        <p>No items in cart</p> // Message displayed when cart is empty
      ) : (
        <>
          {/* Display each item in the cart using the CartCard component */}
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onRemove={onRemoveItem} // Function to remove item from cart
              onQuantityChange={onQuantityChange} // Function to update item quantity
            />
          ))}

          {/* Section for empty cart and checkout buttons */}
          <div className="CartListBtns">
            <button className="EmptyCartButton" onClick={onEmptyCart}>Empty Cart</button> {/* Button to clear the cart */}
            <button id="CheckoutButton">Checkout: ${totalAmount.toFixed(2)}</button> {/* Button showing total amount for checkout */}
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;