import React, { use } from 'react';
import Bottle from '../bottle/bottle';

const Bottles = ({bottlesPromise}) => {
    const bottoles = use(bottlesPromise)
    // console.log(bottoles);
    return (
        <div>
            <h3>Bottles : {bottoles.length}</h3>
            {
                bottoles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;