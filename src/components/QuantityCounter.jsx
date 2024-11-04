import React from 'react';

// QuantityCounter component - handles display and adjustment of quantity for an item
// It accepts the current quantity and functions to increase or decrease the quantity
function QuantityCounter({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="counter-container">
      {/* Button to decrease quantity, disabled when quantity is 0 or less */}
      <button className="QuantityBtn" onClick={onDecrease} disabled={quantity <= 0}>-</button>
      
      {/* Display current quantity */}
      <span>{quantity}</span>
      
      {/* Button to increase quantity */}
      <button className="QuantityBtn" onClick={onIncrease}>+</button>
    </div>
  );
}

export default QuantityCounter;