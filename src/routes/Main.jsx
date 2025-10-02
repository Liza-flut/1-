import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import InstructionCard from "../components/InstructionCard";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const texts = useMemo(
    () => ["Чего вы больше всего боитесь в программировании", "привет мир", "здравствуй, реальность"],
    []
  );
  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);
  const handleLoginChange = useCallback((event) => {
    setLogin(event.target.value);
  }, []);
  const [textHello, setTextHello] = useState(texts[0]);
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [showAuthFields, setShowAuthFields] = useState(false);
  const [showpassword, setShowPassword] = useState("");
  const [showlogin, setShowLogin] = useState("");
  const sendDate=()=>{
    setShowLogin(login);
    setShowPassword(password);
  }


  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  return (
    <>
      {/* <div className="main"> */}
        <div className="main__container">
          <div>Твои данные</div>
          {showlogin}/{showpassword}
          <div className="password-field">
            <label htmlFor="password" className="password-label">
              Пароль:
            </label>
            <input
              id="password"
              type="password"
              className="password-input"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Введите пароль"
            />
          </div>
          <br></br>
          <div className="login-field">
            <label htmlFor="login" className="login-label">
              Логин:
            </label>
            <input
              id="login"
              type="login"
              className="login-input"
              value={login}
              onChange={handleLoginChange}
              placeholder="Введите пароль"
            />
          </div>
          <br></br>
          <button onClick={()=>{sendDate()}} className="bnt bnt-prymery">отправить</button>
          {/* <InstructionCard /> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default MainPage;
