import React from "react";
import GeneralProduct from "../../Components/Products/GeneralProduct";
import "./Products.css";

const Products = () => {
  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="row mt-5">
        <div className="col">
          <GeneralProduct
            src="http://i56.servimg.com/u/f56/15/21/75/97/taza-b10.jpg"
            alt="Mugs"
            title="Mugs"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://www.graficab612.com/images/sistema/servicios/reme.png"
            alt="T-shirts"
            title="T-shirts"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://www.pngitem.com/pimgs/m/273-2732461_cute-country-home-sweet-home-png-pillow-quotes.png"
            alt="Cushions"
            title="Cushions"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <GeneralProduct
            src="https://www.maravillosaserendipia.com.ar/wp-content/uploads/2020/06/cudeno-modelo-serendipia-emprendedores.png"
            alt="Agendas"
            title="Agendas"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://scontent.fcor10-3.fna.fbcdn.net/v/t45.5328-4/59553631_2986241571401132_1792943761391616000_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=c48759&_nc_ohc=WbVRBaI7614AX_bhp-N&_nc_ht=scontent.fcor10-3.fna&oh=b46bd088d6215674706c676d494ee1a0&oe=60B03682"
            alt="Flusk"
            title="Flusks"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/billetera-hp-harry-potter-hogwarts-hufflepuff-fotocaja-tienda-geek-11-9a1d14b4073bf518b515546007064946-1024-1024.jpg"
            alt="Wallets"
            title="Wallets"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/de2a019011-43959b603c472163cb16004004444913-1024-1024.jpg"
            alt="Mate Kits"
            title="Mate Kits"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/medias-soquetes-fotocaja-tienda-geek-11-2fb93dc54706364f6d16055784568432-1024-1024.jpg"
            alt="Socks"
            title="Socks"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/806/999/products/de2a15581-29e094800a500ed0ba16062724609950-1024-1024.jpg"
            alt="3D Impressions"
            title="3D Impressions"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <GeneralProduct
            src="https://png.pngitem.com/pimgs/s/281-2818128_baby-bibs-baby-bib-mockup-free-hd-png.png"
            alt="Bibs"
            title="Bibs"
          />
        </div>
        <div className="col">
          <GeneralProduct
            src="https://www.coachargentina.com.ar/wp-content/uploads/2020/05/U01-web.png"
            alt="Masks"
            title="Masks"
          />
        </div>
        <div className="col">
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
