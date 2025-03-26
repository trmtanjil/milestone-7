import React, { use } from 'react';
import Countri from '../country/countri';

const Countrys = ({countrysApi}) => {
    const countreisapi=use(countrysApi)
    console.log(countreisapi);
    return (
        <div>
            <h2>All countreis travelling: {countreisapi.length}</h2>
            {
                countreisapi.map(country=><Countri country={country}></Countri>)
            }
        </div>
    );
};

export default Countrys;