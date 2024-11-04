import React from 'react';

// This is the CartCard component - it shows each item in the cart with options to change quantity or remove it
function CartCard({ item, onRemove, onQuantityChange }) {
  // Function to remove an item from the cart using its ID
  const handleRemove = () => onRemove(item.id);

  // Get the price as a number (in case it's stored as a string) and calculate the total cost for this item
  const itemPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, '')) || 0;
  const itemTotal = (itemPrice * item.quantity).toFixed(2); // Total = price * quantity

  return (
    <div className="CartCard">
      {/* Section for product image, name, and price */}
      <div className="CartCardInfo">
        <img src={item.image} alt={item.productName} /> {/* Product picture */}
        <h4>{item.productName}</h4> {/* Product name */}
        <p className="price">${itemPrice.toFixed(2)}</p> {/* Single item price in dollars */}

        {/* Quantity buttons - allows user to add or remove items */}
        <div className="cart-item-quantity">
          <button
            className="QuantityBtn"
            onClick={() => onQuantityChange(item.id, item.quantity - 1)} // Decrease quantity by 1
            disabled={item.quantity <= 1} // If quantity is 1, disable the button to avoid negatives
          >
            -
          </button>
          <span>{item.quantity}</span> {/* Shows current quantity */}
          <button
            className="QuantityBtn"
            onClick={() => onQuantityChange(item.id, item.quantity + 1)} // Increase quantity by 1
          >
            +
          </button>
        </div>
      </div>

      {/* Section showing total cost for this item and a remove button */}
      <div className="CartCardActions">
        <div className="CartCardTotal">
          <span className="total-label">Total:</span> {/* Label for the total */}
          <span className="total-amount">${itemTotal}</span> {/* Shows total price for this item */}
        </div>
        
        {/* Remove button to delete item from cart */}
        <button className="RemoveButton" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;