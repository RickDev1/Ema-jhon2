import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandtotal = total + shipping + tax;
    return (
        <div className='Cart'>
            <h3>Order summary</h3>
            <p>Selected Item:{quantity}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping price: ${shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total : ${grandtotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;