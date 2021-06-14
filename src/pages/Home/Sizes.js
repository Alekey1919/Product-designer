import React from "react";
import "./Sizes.css";

function Sizes() {
  return (
    <div className="container-component">
      <h1 id="sizes">Sizes</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://www.led-t-shirts.eu/data/page/64148edb3b00ad10eaca42a0cefe8ddd.jpg"
              alt="Female T-shirt sizes"
            />
          </div>
          <div className="col-md-6">
            <img
              src="https://www.led-t-shirts.eu/data/page/e1a7836ea43baa624fa9c459b227a7d1.jpg"
              alt="Male T-shirt sizes"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://www.unstablegames.com/assets/7146b29c4ff30ac642634642ff1758ef/img/TeeTurtle-Standard-Tank-Fit-Sizing-Chart2_b1031a17-562d-4ed6-bc39-906519e01fd4.png"
              alt="Sleveless sizes"
            />
          </div>
          <div className="col-md-6">
            <img
              src="https://www.teeturtle.com/assets/7146b29c4ff30ac642634642ff1758ef/img/TeeTurtle-Hoodie-Fit-Sizing-Chart2.png"
              alt="Hoodies sizes"
            />
          </div>
        </div>
        <div className="row last-row">
          <div className="col-md-6">
            <img
              src="http://www.laughing-lion-design.com/wp-content/uploads/2014/08/Kids-European-T-Shirt-Sizes.jpg"
              alt="Kids T-shirt sizes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sizes;
