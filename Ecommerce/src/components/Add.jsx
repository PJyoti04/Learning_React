import React,{useState} from 'react'
import './addProd.css'

const Add = () => {
    const [product, setProduct] = useState({
        p_id: Math.random()+Date.now(),
        id: '',
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: {
          rate: '',
          count: ''
        }
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'rate' || name === 'count') {
          setProduct({
            ...product,
            rating: {
              ...product.rating,
              [name]: value
            }
          })
        } else {
          setProduct({
            ...product,
            [name]: value
          })
        }
      }

      async function postData() {
        // let obj = {
        //     id:Math.random()+Date.now()+todo,
        //     todo:todo,
        //     isCompleted:false
        // }

        let res = await fetch("http://localhost:3000/products",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        })
        let data = await res.json()
        console.log(data);
    }



  return (
    <div id="add-product">
    <div id="add-cross">X</div>
    <div className="add-header">Add Your Product</div>
    <div className="add-input">
        <div className="product-input">
            <label >Enter Id</label><br />
            <input type="text" name="id" id="id" placeholder="Enter Product Id .." value={product.id} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label >Enter Title</label>
            <input type="text" name="title" id="title" placeholder="Enter title ..." value={product.title} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label >Enter Price</label>
            <input type="number" name="price" id="price" placeholder="Enter price ..." value={product.price} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label >Describe Your Product</label>
            <input type="text" name="description" id="desc" placeholder="Describe ..." value={product.description} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label >Enter Category</label>
            <input type="text" name="category" id="category" placeholder="Category ..." value={product.category} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label>Image</label>
            <input type="text" name="image" id="image" placeholder="Paste image address .." value={product.image} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label>Enter Rating</label>
            <input type="text" name="rate" id="rate" placeholder="Rating ..." value={product.rating.rate} onChange={handleChange} />
        </div>
        <div className="product-input">
            <label>Count</label>
            <input type="text" name="count" id="count" placeholder="Count ..." value={product.rating.count} onChange={handleChange} />
        </div>
        <div className="product-input">
            <button onClick={postData}  type="button">Add</button>
        </div>
    </div>
</div>
  )
}

export default Add