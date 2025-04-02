import React, { use } from 'react';
import Bottle from '../bottle/bottle';
import "./bottoles.css"

const Bottles = ({bottlesPromise}) => {
    const bottoles = use(bottlesPromise)
    // console.log(bottoles);
    return (
        <div className='justifyCenter'>
            <h3>Bottles : {bottoles.length}</h3>
         <div className='flexDiv'>
         {
                bottoles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
         }
         </div>
        </div>
    );
};

export default Bottles;