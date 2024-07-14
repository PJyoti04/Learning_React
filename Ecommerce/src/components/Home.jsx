import React, { useState, useEffect } from 'react';
import './product.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data);
        console.log(data); 
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="product">
        {products.map((product, index) => (
          <div className="product-item" key={product.p_id}>
            <img src={product.image} alt="product" className="product-img" />
            <h3 className="title">{product.title}</h3>
            <p className="desc">{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="rate">
              Rating:
              <br />
              {product.rating.rate}
            </p>
            <button id={`cart${index}`}>Add to Cart</button>
            <button id={`del${index}`}>Delete</button>
            <button id={`update${index}`}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
