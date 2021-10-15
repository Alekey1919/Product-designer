import React, { useState, useEffect } from "react";
import "./MyDesigns.css";
import DesignList from "./DesignsList";
import Loading from "../../images/Loading.svg";
import { auth, db } from "../../Firebase";
import { Link } from "react-router-dom";

function MyDesigns() {
  const [loading, setLoading] = useState(false);
  const [loadedDesigns, setloadedDesigns] = useState([]);

  // User

  const [user, setUser] = useState();

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        getProducts(user.email);
      } else {
        setUser("noUser");
        setLoading(false);
      }
    });
  }, []);

  const getProducts = (email) => {
    db.collection(email)
      .get()
      .then((res) => {
        const designs = [];
        res.docs.forEach((doc) => {
          designs.push(doc.data());
        });
        setloadedDesigns(designs);
        setLoading(false);
      });
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  if (loading) {
    return (
      <section>
        <img src={Loading} alt="Loading" id="svg" />
      </section>
    );
  }

  if (user === "noUser") {
    return (
      <section className="no-user-container">
        <h1>You must be logged in</h1>
      </section>
    );
  }

  return (
    <div className="my-designs-container">
      <h1 className="mt-5">My Designs</h1>
      <div className="container" id="container-to-left">
        <DesignList designs={loadedDesigns} />

        {loadedDesigns.length >= 1 ? null : (
          <h1 className="no-desings">
            You don't have any desings. Click <Link to="/design">here</Link> to
            create some :)
          </h1>
        )}
      </div>
    </div>
  );
}

export default MyDesigns;
