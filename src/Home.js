import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            image= "https://m.media-amazon.com/images/I/312YOAG9luL._AC_UL480_FMwebp_QL65_.jpg"
            id={1234}
            price={1900}
            rating={3}
            title="The cookware king"
          />
          <Product
            image= "https://m.media-amazon.com/images/I/41hT3-Zq5eL.jpg"
            id={123453}
            price={950}
            rating={2}
            title="Larah by Borosil Green Leaves Silk Series Opalware Dinner Set, 35 Pieces, White"
          />
        </div>
        <div className="home_row">
        <Product
            image= "https://m.media-amazon.com/images/I/41JZi40mZsL._AC_SY200_.jpg"
            id={123324453}
            price={150}
            rating={4}
            title="Lenovo IdeaPad Slim 3 Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows"
          />
          <Product
            image= "https://m.media-amazon.com/images/I/31KZWQCbwpL._AC_SY200_.jpg"
            id={123452242353}
            price={239}
            rating={4}
            title="Lenovo IdeaPad Slim 3 Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows"
          />
          <Product
            image= "https://m.media-amazon.com/images/I/41PnIUzyYML.jpg"
            id={123452344533}
            price={5000}
            rating={4}
            title="Lenovo IdeaPad Slim 3 Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows"
          />
        </div>
        <div className="home_row">
        <Product
            image= "https://db2316p26jqyw.cloudfront.net/wp-content/uploads/2017/10/monitor2.jpg?x41291"
            id={123145423453}
            price={14000}
            rating={4}
            title="Acer 27-inch 165 Hz 0.7 MS FHD Gaming Monitor with TN Panel 400 NITS ZeroFrame, 1 x DVI Dual Link Up, 1 x HDMI, 1 x Display Port, 2W x 2 Speakers - KG271P (Black)"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
