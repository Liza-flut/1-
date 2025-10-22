import React, { useState,useEffect } from "react";
import "./card.css";
import { BsFillBasket2Fill } from 'react-icons/bs';

function Card ({ title,image, description, addToCart, resetKey}) {
  const [isBuy, setIsBuy]=useState(false);
  const handleBuy = () => {
    setIsBuy(true);
    addToCart();
  };
  useEffect(() => {
    setIsBuy(false);
  }, [resetKey]);
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button onClick={handleBuy} className="card-button">
          {!isBuy ? "Купить": "Куплено"}
          <BsFillBasket2Fill style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </div>
  );
}
export default Card;