import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import "./bottoles.css"

const Bottles = ({bottlesPromise}) => {
const bottoles = use(bottlesPromise)

    const [cart, setcart]=useState([])
    

const handleAddToCard= (bottle)=>{
        // console.log('bottle will be added to the cart',bottle);
        const newCart = [...cart, bottle];
        setcart(newCart)

    }

    return (
        <div className='justifyCenter'>
            <h3>Bottles : {bottoles.length}</h3>
            <p>cart length : {cart.length}</p>
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