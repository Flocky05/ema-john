import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected item:{cart.length}</p>
            <p>Total price:${total}</p>
            <p>Total Shinpping : ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <p></p>
        </div>
    );
};

export default Cart;