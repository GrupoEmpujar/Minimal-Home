import React, { useState } from "react";

const ProductCount = ({ handleAddToCart }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count} en el carrito</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
      {count > 0 && (
        <button onClick={() => handleAddToCart(count)}>Agregar al carrito</button>
      )}
    </div>
  );
};

export default ProductCount;
