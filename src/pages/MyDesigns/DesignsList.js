import React from "react";
import CustomDesign from "./CustomDesign";
// import firebase from "firebase/firebase";
import fire from "../../Firebase.js";
// import { useState } from "react";
// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

function DesignsList(props) {
  const deleteDesign = (id, name, design) => {
    if (window.confirm('Are you sure you want to delete "' + name + '"?')) {
      fire
        .database()
        .ref("my-designs/" + id)
        .remove()
        .then(
          document
            .getElementById(id)
            .parentNode.parentNode.classList.add("none")
        );
    }
  };

  return (
    <ul className="row mt-5 g-5 pl-0 mx-0">
      {props.designs.map((design) => (
        <CustomDesign
          key={design.id}
          id={design.id}
          src0={design.src0}
          src1={design.src1}
          name={design.name}
          product={design.product}
          delete={() => deleteDesign(design.id, design.name)}
        />
      ))}
    </ul>
  );
}

export default DesignsList;
