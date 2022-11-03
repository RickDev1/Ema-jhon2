import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleClick = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-con'>
            <div className="products-con">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleClick={handleClick}></Product>)
                }
            </div>
            <div className="cart-con">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;