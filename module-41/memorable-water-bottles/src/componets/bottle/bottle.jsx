import React from 'react';
import './bottle.css'

const Bottle = ({bottle,handleAddToCard}) => {

    // console.log(bottle);
    return (
        <div className='card'>
            <img src={bottle.img} alt="" />
            <button onClick={()=>handleAddToCard(bottle)}>add </button>
        </div>
    );
};

export default Bottle;