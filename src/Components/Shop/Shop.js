import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredcart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        console.log('products load before fetch');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log('producs loaded');
            })
    }, []);

    useEffect(() => {
        console.log('Local storage first line', products);
        const storedCart = getStoredcart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        // console.log('local storage finished');

    }, [products])
    const handleClick = (Selectedproduct) => {
        console.log(Selectedproduct);
        let newCart = [];
        const exists = cart.find(product => product.id === Selectedproduct.id);
        if (!exists) {
            Selectedproduct.quantity = 1;
            newCart = [...cart, Selectedproduct];
        }
        else {
            const rest = cart.filter(product => product.id !== Selectedproduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(Selectedproduct.id);
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