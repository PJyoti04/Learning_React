import React,{useState,useEffect} from "react";
import "./addProd.css";
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const location = useLocation();
//   const {product} = state
  const navigate = useNavigate();
  const product = location.state?.product
  const [updateProduct, setUpdateProduct] = useState({
    id: '',
    p_id:'',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: '',
      count: ''
    }
  });

  useEffect(() => {
    if (product) {
      setUpdateProduct(product);
    } else {
      // If product data is not available in state, fetch it using the ID from the URL
      const productId = location.pathname.split('/').pop();
      fetchProduct(productId);
    }
  }, [product, location]);

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await response.json();
      setUpdateProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate" || name === "count") {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [name]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
      const response = await fetch(`http://localhost:3000/products/${updateProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });
      navigate('/');
    };

  return (
    <div id="add-product">
      <div id="add-cross">X</div>
      <div className="add-header">Update Your Product</div>
      <div className="add-input">
        <div className="product-input">
          <label>Id</label>
          <br />
          <input type="text" name="p_id" value={updateProduct.p_id} readOnly />
        </div>
        <div className="product-input">
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={updateProduct.title}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <label>Price</label>
          <br />
          <input
            type="number"
            name="price"
            value={updateProduct.price}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={updateProduct.description}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <label>Category</label>
          <br />
          <input
            type="text"
            name="category"
            value={updateProduct.category}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <label>Image</label>
          <br />
          <input
            type="text"
            name="image"
            value={updateProduct.image}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <label>Rating</label>
          <br />
          <input
            type="text"
            name="rate"
            value={updateProduct.rating.rate}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <label>Count</label>
          <br />
          <input
            type="text"
            name="count"
            value={updateProduct.rating.count}
            onChange={handleChange}
          />
        </div>
        <div className="product-input">
          <button onClick={() => handleSubmit} type="button">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Update;
