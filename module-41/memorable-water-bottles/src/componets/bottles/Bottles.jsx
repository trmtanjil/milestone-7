import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import "./bottoles.css"

const Bottles = ({bottlesPromise}) => {
    const bottoles = use(bottlesPromise)
    
    const [parches, setparches]=useState([])

    const handleAddToCard= (bottle)=>{
        console.log('bottle will be added to the cart',bottle);
    }

    return (
        <div className='justifyCenter'>
            <h3>Bottles : {bottoles.length}</h3>
         <div className='flexDiv'>
         {
                bottoles.map(bottle => <Bottle
                     key={bottle.id} 
                     bottle={bottle}
                     handleAddToCard={handleAddToCard}
                     ></Bottle>)
         }
         </div>
        </div>
    );
};

export default Bottles;