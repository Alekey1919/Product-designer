import React from "react";
import "./Sizes.css";
import Female from "../../images/general/Female-t.webp";
import Male from "../../images/general/Male-t.webp";
import Sleeveless from "../../images/general/Sleeveless.webp";
import Hoodie from "../../images/general/Hoodie.webp";
import Kids from "../../images/general/Kids.webp";

function Sizes() {
  return (
    <div className="container-component">
      <h1 id="sizes">Sizes</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Female} alt="Female T-shirt sizes" />
          </div>
          <div className="col-md-6">
            <img src={Male} alt="Male T-shirt sizes" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={Sleeveless} alt="Sleveless sizes" />
          </div>
          <div className="col-md-6">
            <img src={Hoodie} alt="Hoodies sizes" />
          </div>
        </div>
        <div className="row last-row">
          <div className="col-md-6">
            <img src={Kids} alt="Kids T-shirt sizes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sizes;
