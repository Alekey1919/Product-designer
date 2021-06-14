import React from "react";
import "./CustomDesign.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomDesign(props) {
  return (
    <div className="col">
      {props.src1 ? (
        <div className="mb-5 mt-1">
          <div className="custom-product-container" id={props.id}>
            <Carousel id="test">
              <Carousel.Item className="mt-2" bg="primary">
                <img
                  src={props.src0}
                  width="300px"
                  height="320px"
                  alt="Front"
                  className="custom-product-image"
                />
              </Carousel.Item>
              <Carousel.Item className="mt-2">
                <img
                  src={props.src1}
                  width="300px"
                  height="320px"
                  alt="Back"
                  className="custom-product-image"
                />
              </Carousel.Item>
            </Carousel>
            <h1 id="name">{props.name}</h1>
            <button onClick={props.delete} id="delete-btn">
              <i class="far fa-times-circle"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-5 mt-1">
          <div className="custom-product-container" id={props.id}>
            <img
              src={props.src0}
              width="300px"
              height="320px"
              alt="Front"
              className="custom-product-image mt-3"
            />
            <h1 id="name-single">{props.name}</h1>
            <button onClick={props.delete} id="delete-btn-single">
              <i class="far fa-times-circle"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDesign;
