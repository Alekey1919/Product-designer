import React from "react";
import "./MyDesigns.css";
import { useState, useEffect } from "react";
import DesignList from "./DesignsList";
import Loading from "../../images/Loading.svg";

function MyDesigns() {
  const [loading, setLoading] = useState(false);
  const [loadedDesigns, setloadedDesigns] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://tiess-test-default-rtdb.firebaseio.com/my-designs.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const designs = [];

        for (const key in data) {
          const design = {
            id: key,
            ...data[key],
          };
          designs.push(design);
        }

        setLoading(false);
        setloadedDesigns(designs);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <img src={Loading} alt="Loading" id="svg" />
      </section>
    );
  }

  return (
    <div className="my-designs-container">
      <h1 className="mt-5">My Designs</h1>
      <div className="container" id="container-to-left">
        <DesignList designs={loadedDesigns} />
      </div>
    </div>
  );
}

export default MyDesigns;
