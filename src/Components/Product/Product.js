import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleClick } = props;
    const { name, img, seller, price, ratings }
        = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='p-name'>{name}</p>
                <p>Price: {price}</p>
                <p>seller: {seller}</p>
                <p> Rattigs: {ratings}</p>
            </div>
            <button onClick={() => handleClick(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;