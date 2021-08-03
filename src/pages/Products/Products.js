import React from "react";
import GeneralProduct from "../../Components/Products/GeneralProduct";
import "./Products.css";
import { useEffect } from "react";
import Mug from "../../images/general/mug-b.webp";
import Tshirt from "../../images/general/Tshirt.webp";
import Cushion from "../../images/general/Cushion.webp";
import Agenda from "../../images/general/Agenda1.webp";
import Flask from "../../images/general/Flask1.webp";
import Wallet from "../../images/general/Wallet.webp";
import Mate from "../../images/general/Mate.webp";
import Socks from "../../images/general/Socks.webp";
import Threed from "../../images/general/Threed.webp";
import Bib from "../../images/general/Bib.webp";
import Mask from "../../images/general/Mask.webp";
import Mousepad from "../../images/general/Mousepad.webp";

const Products = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="row mt-5">
        <div className="col mb-5">
          <GeneralProduct src={Mug} alt="Mugs" title="Mugs" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Tshirt} alt="T-shirts" title="T-shirts" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Cushion} alt="Cushions" title="Cushions" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Agenda} alt="Agendas" title="Agendas" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Flask} alt="Flask" title="Flasks" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Wallet} alt="Wallets" title="Wallets" />
        </div>

        <div className="col mb-5">
          <GeneralProduct src={Mate} alt="Mate Kits" title="Mate Kits" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Socks} alt="Socks" title="Socks" />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src={Threed}
            alt="3D Impressions"
            title="3D Impressions"
          />
        </div>

        <div className="col mb-5">
          <GeneralProduct src={Bib} alt="Bibs" title="Bibs" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Mask} alt="Masks" title="Masks" />
        </div>
        <div className="col mb-5">
          <GeneralProduct src={Mousepad} alt="Mousepads" title="Mousepads" />
        </div>
      </div>
    </div>
  );
};

export default Products;
