import React from 'react';
import './bottle.css'

const Bottle = ({bottle,handleAddToCard}) => {
    const {price,stock} = bottle;

    console.log(bottle);
    return (
        <div className='card'>
            <img src={bottle.img} alt="" />

            <p> Price : ${price}</p>
            <p>remaining: {stock} </p>
            <button onClick={()=>handleAddToCard(bottle)}>add </button>
        </div>
    );
};

export default Bottle;