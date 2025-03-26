import React, { use, useState } from 'react';
import Countri from '../country/countri';
import "./countrys.css"



const Countrys = ({countrysApi}) => {
    const [visitedCountries, setvitsitedCountries] = useState([])



    const countreisapi=use(countrysApi);

    const handleVisitedCountries =(country)=>{
        console.log('country visited clicke to be added',country);
    }

    return (
        <div>
        <h2>All countreis travelling: {countreisapi.length}</h2>
        <div className='countrys'>
            {
                countreisapi.map(country=><Countri handleVisitedCountries={handleVisitedCountries} country={country}></Countri>)
            }
        </div>
        </div>
    );
};

export default Countrys;