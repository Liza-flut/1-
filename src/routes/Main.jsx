import "./Main.scss";
import Card from "../components/Card";
import React, { useState, useEffect } from "react";

const MainPage = () => {
  const [cards, setCards] = useState([])
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(true);
    setTimeout(() => {
      setCards([
        {
          id: 1,
          image: "images/card.png",
          title: "112 000 ₽",
          description: "Кроссовки Nike Pegasus Limited Edition"
        },
        {
          id: 2,
          image: "images/card.png",
          title: "112 000 ₽",
          description: "Кроссовки Nike Pegasus Limited Edition"
        },
        {
          id: 3,
          image: "images/card.png",
          title: "112 000 ₽",
          description: "Кроссовки Nike Pegasus Limited Edition"
        }
      ]);
      setIsLoad(false);
    }, 3000);
  },[])
  return(
    <>
    {isLoad == true ?  (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "10vh"}}>Загрузка</div>
      ) : (
        <div style={{display: "flex", gap:"20px", padding:"20px"}}>
          {cards.map((card) =>(
            <Card key={card.id} title={card.title} image={card.image} description={card.description} /> 
          ))}
        </div>
      )}
    </>
  )
};

export default MainPage;
