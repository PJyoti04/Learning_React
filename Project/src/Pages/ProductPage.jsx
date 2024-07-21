import React from "react";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product">
      <div className="product-head">
        <h1>PRODUCT</h1>
        <p>
          Comfortable fabrics and flattering fits? Expect both from our formal
          and casual men's trousers. Our chinos are bestsellers for good reason
          – they feature non-iron finishes, super-soft textures, and slight
          stretch for comfort. To complete business looks, choose 5-pocket men's
          jeans in versatile shades of charcoal, navy, and oatmeal.
        </p>
        <div className="product-btn">
          <div className="pbtn">5 POCKET JEANS</div>
          <div className="pbtn">SUIT TROUSERS</div>
          <div className="pbtn">BLACK TROUSERS</div>
        </div>
      </div>
      <div className="pimg">
        <img
          src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw85cf41c8/merchAssets/SS24/TIBs/ss24-tib-038.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductPage;
