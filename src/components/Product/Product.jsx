import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductCount from "./ProductCount";


const Product = ({ product }) => {
  const { addProduct} = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleAddToCart = (quantity) => {
    addProduct(product, quantity);
  };

  return (
    <div>
      <h1>{Cards.nombre}</h1>
      <img src={cards.image} alt={cards.nombre} />
      <p>{cards.description}</p>
      <p>id: {cards.id}</p>
      <h2>Precio: ${cards.precio}</h2>
      <div>
        {selectedQuantity === 0 ? (
          <ProductCount handleAddToCart={handleAddToCart} />
        ) : (
          <Link to="/cart">
            <Button>Ir al carrito</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Product
