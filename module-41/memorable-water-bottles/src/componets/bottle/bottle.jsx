import React from 'react';
import './bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    return (
        <div className='card'>
            <img src={bottle.img} alt="" />
        </div>
    );
};

export default Bottle;