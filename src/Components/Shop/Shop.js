import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-con'>
            <div className="products-con">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-con"><h3>Order summary</h3></div>
        </div>
    );
};

export default Shop;