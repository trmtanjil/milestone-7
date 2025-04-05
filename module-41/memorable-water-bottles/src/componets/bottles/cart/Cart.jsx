import React from 'react';
import './cart.css'

const Cart = ({cart, handleRemoveToCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle=><div key={bottle.div} >
                   <img src= {bottle.img} alt="" />
                   
                   <button onClick={()=>handleRemoveToCart(bottle.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;