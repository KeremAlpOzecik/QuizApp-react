import React from "react";
import "./Modal.css";

export const Modal = ({ score }) => {
  const goToHomePage = () => { window.location ='/'};
  return (
    <div className="modal">
      <div className="modal-title">Skor: {score}</div>
      <div onClick={goToHomePage} className="modal-btn">
        Yeniden Başla
      </div>
    </div>
  );
};
