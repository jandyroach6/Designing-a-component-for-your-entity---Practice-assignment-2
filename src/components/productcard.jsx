// write product card here
import React from "react";
import ViewProductButton from "../components/button";
import "../index.css";

const Productcard = () => {
  // Static product details
  const productImage = "./src/assets/fashion.webp";
  const productName = "Anarkali Suit";
  const price = "$49.99";

  return (
    <div>
      <img 
        id = "productImage"
        className="dress"
        src={productImage}
      />
      <h2>{productName}</h2>
      <p>{price}</p>
      <div>
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
