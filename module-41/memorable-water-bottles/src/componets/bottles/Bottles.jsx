import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import "./bottoles.css"
import { addToStoreCart, getToStorCart } from '../../localStorage/localStorage';

const Bottles = ({bottlesPromise}) => {
const bottoles = use(bottlesPromise)

    const [cart, setcart]=useState([])
    
    // useEffect 
    useEffect(()=>{
        const storedCartIds= getToStorCart();
        // console.log(storedCartIds,bottoles);

        const storedCart = []

        for(const id of storedCartIds){
             const cartBottle = bottoles.find(bottle =>bottle.id ===id);
             if(cartBottle){
                storedCart.push(cartBottle)
             }
        }
         setcart(storedCart);
    },
[bottoles]);


const handleAddToCard= (bottle)=>{
  
        // console.log('bottle will be added to the cart',bottle);
        const newCart = [...cart, bottle];
        setcart(newCart)

        // save the bottle id in the storage

        addToStoreCart(bottle.id)

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