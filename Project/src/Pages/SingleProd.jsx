import React,{useEffect,useState} from "react";
import './style.css'
import { useParams } from "react-router-dom";
const SingleProd = ({ count }) => {
    let {id} = useParams()
    console.log(id);
    const [prod,setProd] = useState({})
    async function getData () {
        let res = await fetch(`http://localhost:3000/products/${id}`)
        let data = await res.json()
        setProd(data)
    }
    useEffect(() => {
        getData()
    },[id])
  return (
    <div className={`${count === 1 ? "slide-notvisible" : "slide-visiblee"}`}>
      <div className="product-container">
        <img src={prod.imgSrc} alt="Product Image" className="product-image" />
        <div className="product-details">
          <div className="product-header">
            <div className="product-title">
              {prod.name}
            </div>
            <div className="product-price-rating">
              <p>${prod.price}</p>
              <p className="rating">{prod.rating} / 5</p>
            </div>
            <div className="divider"></div>
            <p className="product-description">
             {prod.description}
            </p>
          </div>
          <div className="product-options">
            <div className="color-options">
              <p className="option-title">COLOR</p>
              <div className="color-palette">
                <div className="color-circle reed"></div>
                <div className="color-circle slate"></div>
                <div className="color-circle black"></div>
                <div className="color-circle blue"></div>
              </div>
            </div>
            <div className="quantity-options">
              <p className="option-title">QUANTITY</p>
              <select className="quantity-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="add-to-bag">
              <button className="add-to-bag-button">ADD TO BAG</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProd;
