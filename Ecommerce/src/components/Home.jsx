import React, { useState, useEffect } from "react";
import "./product.css";
import { useNavigate,Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    navigate(`/${e}`);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setProducts(products.filter((product) => product.id !== id));
    } else {
      console.log("Failed to delete product");
    }
  };

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
            <button id={`del${index}`} onClick={() => handleDelete(product.id)}>
              Delete
            </button>
            <Link to={`/update/${product.id}`} state={{product}}>
              <button>Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
