import React from "react";
import "./Home.css";
import Product from "../../Components/Products/Product";
import barbijo from "../../images/Barbijo.png";
import Overlay from "../../Components/Products/Overlay";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import mousepad from "../../images/Mousepad.png";
import { Link } from "react-router-dom";
import Tshirt from "../../images/T-shirt.png";

function Home() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  const [isOpen, setIsOpen] = useState(false);
  const [overPath, setOverPath] = useState("");

  function openOverlay(path) {
    setIsOpen(true);
    document.body.classList.toggle("overflow-hidden");
    setOverPath(path);
  }

  function closeOverlay() {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }

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
              src="https://www.brildor.com/blog/wp-content/uploads/2019/11/como-sublimar-tazas-1-e1574069564818.png"
              alt="Mug"
              title="Mug"
              price="333"
              onClick={() =>
                openOverlay(
                  "https://www.brildor.com/blog/wp-content/uploads/2019/11/como-sublimar-tazas-1-e1574069564818.png"
                )
              }
            />
          </div>
          <div className="col mt-5">
            <Product
              src="https://www.maravillosaserendipia.com.ar/wp-content/uploads/2018/08/so%C3%B1arlohacerlofrente.png"
              alt="Agenda"
              title="Agenda"
              price="404"
              onClick={() =>
                openOverlay(
                  "https://www.maravillosaserendipia.com.ar/wp-content/uploads/2018/08/so%C3%B1arlohacerlofrente.png"
                )
              }
            />
          </div>
          <div className="col mt-5">
            <Product
              src={barbijo}
              alt="Mask"
              title="Mask"
              price="123"
              onClick={() => openOverlay(barbijo)}
            />
          </div>
          <div className="col mt-5">
            <Product
              src="https://colormake.com/wp-content/uploads/2013/03/botella-de-aluminio-600-1-1.png"
              alt="Flask"
              title="Flask"
              price="999"
              onClick={() =>
                openOverlay(
                  "https://colormake.com/wp-content/uploads/2013/03/botella-de-aluminio-600-1-1.png"
                )
              }
            />
          </div>
          <div className="col my-5 ">
            <Product
              src={mousepad}
              alt="Mousepad"
              title="Mousepad"
              price="502"
              onClick={() => openOverlay(mousepad)}
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
                <Card.Img
                  variant="top"
                  src="https://ecofilmfest.my/shop/wp-content/uploads/2017/10/tshirt-size-guide.jpg"
                  className="card-img"
                />
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
                <Card.Img
                  variant="top"
                  src="https://environment-review.yale.edu/sites/default/files/styles/flexslider_full/public/clothing-design-yer-sq.jpg?itok=uADvHc3l"
                  className="card-img"
                />
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
                <Card.Img
                  variant="top"
                  src="https://www.seekpng.com/png/detail/119-1192175_faq-faq-png-pink.png"
                  className="card-img"
                />
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
