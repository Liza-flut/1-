import React from "react";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo d-flex align-items-center gap-2 p-2">
    <div className="logo-icon">
      <img src="/favicon.ico" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
    </div>
    <div className="logo-text">React App</div>
  </div>
  );
};

export default Logo;