import React from "react";
import "./Home.css";
import Product from "../../Components/Products/Product";
import Overlay from "../../Components/Products/Overlay";
import useHome from "./useHome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tshirt from "../../images/webp/T-shirt.webp";
import Mug from "../../images/general/mug.webp";
import Agenda from "../../images/general/agenda.webp";
import Barbijo from "../../images/webp/Barbijo.webp";
import Flask from "../../images/general/flask.webp";
import Mousepad from "../../images/webp/Mousepad.webp";
import Sizes from "../../images/general/sizes.webp";
import Design from "../../images/general/create-design.webp";
import Faq from "../../images/general/faq.webp";

function Home() {
  const { isOpen, overPath, openOverlay, closeOverlay } = useHome();

  return (
    <div>
      <div id="background-container"></div>
      <div className="container-sm">
        <h1 className="text-center pt-5">Best Sellings</h1>
        <div className="row mt-auto g-4">
          <div className="col mt-5">
            <Product
              src={Tshirt}
              alt="T-shirt"
              title="T-shirt"
              price="666"
              onClick={() => openOverlay(Tshirt)}
            />
          </div>
          <div className="col mt-5">
            <Product
              src={Mug}
              alt="Mug"
              title="Mug"
              price="333"
              onClick={() => openOverlay(Mug)}
            />
          </div>
          <div className="col mt-5">
            <Product
              src={Agenda}
              alt="Agenda"
              title="Agenda"
              price="404"
              onClick={() => openOverlay(Agenda)}
            />
          </div>
          <div className="col mt-5">
            <Product
              src={Barbijo}
              alt="Mask"
              title="Mask"
              price="123"
              onClick={() => openOverlay(Barbijo)}
            />
          </div>
          <div className="col mt-5">
            <Product
              src={Flask}
              alt="Flask"
              title="Flask"
              price="999"
              onClick={() => openOverlay(Flask)}
            />
          </div>
          <div className="col my-5 ">
            <Product
              src={Mousepad}
              alt="Mousepad"
              title="Mousepad"
              price="502"
              onClick={() => openOverlay(Mousepad)}
            />
          </div>
        </div>
        <Overlay
          open={isOpen}
          onClose={closeOverlay}
          oversrc={overPath}
        ></Overlay>
      </div>
      <hr></hr>
      <div className="container pt-5">
        <div className="row mt-auto g-4">
          <div className="col d-flex mb-5 justify-content-center">
            <Card style={{ width: "18rem" }}>
              <div className="img-container">
                <Card.Img variant="top" src={Sizes} className="card-img" />
              </div>
              <Card.Body>
                <Card.Title className="text-center">
                  What is my size?
                </Card.Title>
                <Card.Text>Some Custom text one can write here.</Card.Text>
                <Button variant="danger" className="">
                  <Link to="/Sizes" className="link">
                    See sizes
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex mb-5 justify-content-center">
            <Card style={{ width: "18rem" }}>
              <div className="img-container">
                <Card.Img variant="top" src={Design} className="card-img" />
              </div>
              <Card.Body>
                <Card.Title>Create your own designs</Card.Title>
                <Card.Text>
                  Try our design tool to create your personalized products.
                </Card.Text>
                <Button variant="danger">
                  <Link to="/Design" className="link">
                    Create my designs
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex mb-5 justify-content-center">
            <Card style={{ width: "18rem" }}>
              <div className="img-container">
                <Card.Img variant="top" src={Faq} className="card-img" />
              </div>
              <Card.Body>
                <Card.Title>FAQ</Card.Title>
                <Card.Text>
                  Find all the information you need in our FAQ
                </Card.Text>
                <Button variant="danger">
                  <Link to="/FAQ" className="link">
                    Go to the FAQ
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Coded by λlekey</p>
      </footer>
    </div>
  );
}

export default Home;
