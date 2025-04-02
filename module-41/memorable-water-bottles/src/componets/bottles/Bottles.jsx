import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import "./bottoles.css"
import { addToStoreCart, getToStorCart } from '../../localStorage/localStorage';
import Cart from './cart/cart';

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


const handleRemoveToCart=id=>{
console.log(' remove frome the item cart ' ,id);

const remainingCart = cart.filter(bottle => bottle.id !==id)
setcart(remainingCart)
}

    return (
        <div className='justifyCenter'>
            <h3>Bottles : {bottoles.length}</h3>
            <p>cart length : {cart.length}</p>

        <Cart cart={cart}   handleRemoveToCart={handleRemoveToCart}>
        
        </Cart>


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