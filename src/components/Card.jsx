import React from "react";
import "./card.css";
import { BsFillBasket2Fill } from 'react-icons/bs';

function Card ({ title,image, description}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">
          В корзину
          <BsFillBasket2Fill style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </div>
  );
}
export default Card;