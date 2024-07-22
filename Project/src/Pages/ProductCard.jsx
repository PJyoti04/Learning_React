import React from 'react'
import './ProductCard.css'

const ProductCard = ({img,name,price}) => {
  return (
    <div className='card'>
        <div className="prod">
            <img loading='lazy' src={img} alt="" />
        <h1>{name}</h1>
        <h4>{price}</h4>
        </div>
    </div>
  )
}

export default ProductCard