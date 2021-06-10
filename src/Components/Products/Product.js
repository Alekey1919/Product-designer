import React from "react";
import classes from "./Product.module.css";

function Product(props) {
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
      <p className={classes.price}>$ {props.price}</p>
    </div>
  );
}

export default Product;
