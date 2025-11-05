import React, { useState,useEffect } from "react";
import "./card.css";
import { BsFillBasket2Fill } from 'react-icons/bs';

function Card ({ title,image, description, addToCart, resetKey, quantity, desc}) {
  const [isBuy, setIsBuy]=useState(false);
  const [remaining, setRemaining] = useState(quantity);
  const handleBuy = () => {
    if (remaining === 0) return;
    setRemaining(prev => prev - 1);
    addToCart();
  };
  useEffect(() => {
    setRemaining(quantity);
  }, [resetKey, quantity]);
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-desc">{desc}</p>
        <button onClick={handleBuy} className="card-button"disabled={remaining === 0}
          style={remaining === 0 ? { backgroundColor: "gray", cursor: "not-allowed" } : {}}>
          {remaining === 0 ? "Нет в наличии" : !isBuy ? "Купить" : "Куплено"}
          <BsFillBasket2Fill style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </div>
  );
}
export default Card;