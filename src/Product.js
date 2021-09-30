import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ image, id, price, rating, title }) {
  const [state, dispatch] = useStateValue();
  // console.log("This is basket", state.basket);
  const addToBasket = () => {
    //dispatch to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title: title,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <strong>{price}</strong>
          <small> Rs</small>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
