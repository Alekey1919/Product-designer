import React from "react";
import "./Design.css";
import GeneralProduct from "../../Components/Products/GeneralProduct";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TShirt from "../../images/webp/White-t-shirt.webp";
import Hoodie from "../../images/webp/White-hoodie.webp";
import Cushion from "../../images/webp/White-cushion.webp";
import Mug from "../../images/webp/Mug.webp";
import Bib from "../../images/webp/Bib.webp";
import Mousepad from "../../images/webp/White-mousepad.webp";

function Design() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="container">
      <h1 className="title">Select a product</h1>
      <div className="row mb-5">
        <div className="col mt-5">
          <Link to="/design-t-shirt" exact style={{ textDecoration: "none" }}>
            <GeneralProduct src={TShirt} alt="T-shirt" title="T-shirt" />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-hoodie" exact style={{ textDecoration: "none" }}>
            <GeneralProduct src={Hoodie} alt="Hoodie" title="Hoodie" />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-cushion" exact style={{ textDecoration: "none" }}>
            <GeneralProduct src={Cushion} alt="Cushion" title="Cushion" />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-mug" exact style={{ textDecoration: "none" }}>
            <GeneralProduct src={Mug} alt="Mug" title="Mug" />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-bib" exact style={{ textDecoration: "none" }}>
            <GeneralProduct src={Bib} alt="Bib" title="Bib" />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-mousepad" exact style={{ textDecoration: "none" }}>
            <GeneralProduct src={Mousepad} alt="Mousepad" title="Mousepad" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Design;
