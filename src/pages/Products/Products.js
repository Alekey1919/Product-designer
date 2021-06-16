import React from "react";
import GeneralProduct from "../../Components/Products/GeneralProduct";
import "./Products.css";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="row mt-5">
        <div className="col mb-5">
          <GeneralProduct
            src="http://i56.servimg.com/u/f56/15/21/75/97/taza-b10.jpg"
            alt="Mugs"
            title="Mugs"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://www.graficab612.com/images/sistema/servicios/reme.png"
            alt="T-shirts"
            title="T-shirts"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://www.pngitem.com/pimgs/m/273-2732461_cute-country-home-sweet-home-png-pillow-quotes.png"
            alt="Cushions"
            title="Cushions"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://www.maravillosaserendipia.com.ar/wp-content/uploads/2020/06/cudeno-modelo-serendipia-emprendedores.png"
            alt="Agendas"
            title="Agendas"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://i2.wp.com/soluciondigitalsv.com/wp-content/uploads/2019/11/PACHON-PLATEADO-600ML.png?fit=800%2C800&ssl=1"
            alt="Flask"
            title="Flasks"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/billetera-hp-harry-potter-hogwarts-hufflepuff-fotocaja-tienda-geek-11-9a1d14b4073bf518b515546007064946-1024-1024.jpg"
            alt="Wallets"
            title="Wallets"
          />
        </div>

        <div className="col mb-5">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/de2a019011-43959b603c472163cb16004004444913-1024-1024.jpg"
            alt="Mate Kits"
            title="Mate Kits"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/medias-soquetes-fotocaja-tienda-geek-11-2fb93dc54706364f6d16055784568432-1024-1024.jpg"
            alt="Socks"
            title="Socks"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/de2a15581-29e094800a500ed0ba16062724609950-1024-1024.jpg"
            alt="3D Impressions"
            title="3D Impressions"
          />
        </div>

        <div className="col mb-5">
          <GeneralProduct
            src="https://png.pngitem.com/pimgs/s/281-2818128_baby-bibs-baby-bib-mockup-free-hd-png.png"
            alt="Bibs"
            title="Bibs"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://www.coachargentina.com.ar/wp-content/uploads/2020/05/U01-web.png"
            alt="Masks"
            title="Masks"
          />
        </div>
        <div className="col mb-5">
          <GeneralProduct
            src="https://vsimgs3.forfansbyfans.com/image/cache/data/productimages/CSGO/HomeOffice/18/ACOU038MRW1_CluckerStrike-1000x1000.png"
            alt="Mousepads"
            title="Mousepads"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
