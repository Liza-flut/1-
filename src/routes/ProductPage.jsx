import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5022/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <img src="/images/card.png" alt={product.name} width="250" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>{product.price} ₽</h3>
      {product.quantity === 0
        ? <p style={{ color: "red" }}>Нет в наличии</p>
        : <button>Купить</button>}
    </div>
  );
};

export default ProductPage;
