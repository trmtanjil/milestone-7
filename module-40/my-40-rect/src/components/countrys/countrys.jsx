import React, { use } from 'react';
import Countri from '../country/countri';
import "./countrys.css"

const Countrys = ({countrysApi}) => {
    const countreisapi=use(countrysApi)
    console.log(countreisapi);
    return (
        <div>
        <h2>All countreis travelling: {countreisapi.length}</h2>
        <div className='countrys'>
            {
                countreisapi.map(country=><Countri country={country}></Countri>)
            }
        </div>
        </div>
    );
};

export default Countrys;