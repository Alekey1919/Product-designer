import React from "react";
import classes from "./GeneralProduct.module.css";

function GeneralProduct(props) {
  return (
    <div className={classes.container} id={props.id}>
      <img
        src={props.src}
        alt={props.alt}
        className={classes.image}
        onClick={props.onClick}
      />
      <h2 className={classes.title} onClick={props.onClick}>
        {props.title}
      </h2>
    </div>
  );
}

export default GeneralProduct;
