import React from "react";
import "./Overlay.css";

function Overlay(props) {
  if (!props.open) return null;

  return (
    <div className="overlay" onClick={props.onClose}>
      <img src={props.oversrc} className="overlay-img" />
    </div>
  );
}

export default Overlay;
