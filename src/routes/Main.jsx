import "./Main.scss";
import Logo from "../components/Logo";
import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import axios from "axios";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [cards, setCards] = useState([])
  const [isLoad, setIsLoad] = useState(true);
  const [cartCount, setCartCount]= useState(0);
  const [isPlus, setIsPlus]=useState(false);

  const addToCart = () => {setCartCount(prev => prev + 1); setIsPlus(true)};
  const clearCart = () => {
    setCartCount(0);
    setIsPlus(false);
    setResetCards(prev => prev + 1);
  };
  const [resetCards, setResetCards] = useState(0);

  useEffect(() => {
  setIsLoad(true);
  const loadProducts = async () => {
      const response = await axios.get("https://localhost:7128/api/Product/All");
      setCards(response.data);
      setIsLoad(false);
  }
  loadProducts();
}, []);

  return(
  <>
    <Logo/>
    <div 
        onClick={clearCart}
        style={{
        position: 'fixed',
        top: '20px',
        right: '15px',
        background: 'black',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '8px',
        fontSize: '14px',
        zIndex: 1000
      }}>
        <FaShoppingCart style={{transform: 'scaleX(-1)',  marginRight: "8px"}}/>Корзина({!isPlus ? "": "+"}{cartCount})
      </div>
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
    <div className="col col-6">
      {isLoad == true ?  (
        <div style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
          flexDirection: "column" 
        }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={{
          display: "flex", 
          flexWrap: "wrap", 
          gap: "20px", 
          padding: "20px", 
          justifyContent: "center",
          width: "100%",
          marginTop: "50px"
        }}>
          {cards.map((card) =>(
            <Card key={card.id} title={card.price} image={card.Image || "/images/card.png"} description={card.name} desc= {card.description} addToCart={addToCart} resetKey={resetCards} quantity={card.quantity}/> 
          ))}
        </div>
      )}
    </div>
  </div>
  </>
)
};

export default MainPage;
