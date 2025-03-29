import React, { use } from 'react';

const Bottles = ({bottlesPromise}) => {
    const bottoles = use(bottlesPromise)
    console.log(bottoles);
    return (
        <div>
            
        </div>
    );
};

export default Bottles;