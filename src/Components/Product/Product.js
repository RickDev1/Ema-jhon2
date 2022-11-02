import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='p-name'>{name}</p>
                <p>Price: {price}</p>
                <p>seller: {seller}</p>
                <p> Rattigs: {ratings}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;