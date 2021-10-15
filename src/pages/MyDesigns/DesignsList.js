import React, { useEffect, useState } from "react";
import CustomDesign from "./CustomDesign";
import { db, auth } from "../../Firebase";

function DesignsList(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const deleteDesign = (id, name) => {
    if (window.confirm('Are you sure you want to delete "' + name + '"?')) {
      db.collection(user.email)
        .where("name", "==", name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
        })
        .then(() => {
          document
            .getElementById(id)
            .parentNode.parentNode.classList.add("none");
        });
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
