import React from "react";
import "./Design.css";
import GeneralProduct from "../../Components/Products/GeneralProduct";
import { Link } from "react-router-dom";

function Design() {
  return (
    <div className="container">
      <h1 className="title">Select a product</h1>
      <div className="row mb-5">
        <div className="col mt-5">
          <Link to="/design-t-shirt" exact style={{ textDecoration: "none" }}>
            <GeneralProduct
              src="https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png"
              alt="T-shirt"
              title="T-shirt"
            />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-hoodie" exact style={{ textDecoration: "none" }}>
            <GeneralProduct
              src="https://s3.marpple.co/f1/2018/9/1235206_1536115099081_42916.png"
              alt="Hoodie"
              title="Hoodie"
            />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-cushion" exact style={{ textDecoration: "none" }}>
            <GeneralProduct
              src="https://static.wixstatic.com/media/2cd43b_4b58e1ed4a4d46fca7197f5e40c35b61~mv2_d_1920_1870_s_2.png/v1/fill/w_320,h_312,q_90/2cd43b_4b58e1ed4a4d46fca7197f5e40c35b61~mv2_d_1920_1870_s_2.png"
              alt="Cushion"
              title="Cushion"
            />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-mug" exact style={{ textDecoration: "none" }}>
            <GeneralProduct
              src="https://www.mystrengthstuff.com/wp-content/uploads/2018/03/Mug-mockup-01.png"
              alt="Mug"
              title="Mug"
            />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-bib" exact style={{ textDecoration: "none" }}>
            <GeneralProduct
              src="https://outliners.es/wp-content/uploads/2019/04/babero-rosa.png"
              alt="Bib"
              title="Bib"
            />
          </Link>
        </div>
        <div className="col mt-5">
          <Link to="/design-mousepad" exact style={{ textDecoration: "none" }}>
            <GeneralProduct
              src="http://cdn.shopify.com/s/files/1/0501/7409/9612/products/glorious_gaming_large_white_cloth_mousepad_1.png?v=1614656167"
              alt="Mousepad"
              title="Mousepad"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Design;
