import React, { use, useState } from 'react';
import Countri from '../country/countri';
import "./countrys.css"



const Countrys = ({countrysApi}) => {
    const [visitedCountries, setvitsitedCountries] = useState([])



    const countreisapi=use(countrysApi);

    const handleVisitedCountries =(country)=>{
        console.log('country visited click to be added',country);
        const newVisitedCOuntries = [...visitedCountries,country];
        setvitsitedCountries(newVisitedCOuntries);
    }

    return (
        <div>
        <h2>All countreis travelling: {countreisapi.length}</h2>
        <h3>Traveled so far : {visitedCountries.length}</h3>
        <ol>
            {
                visitedCountries.map(country=> <li>{country.name.common}</li>)
            }
        </ol>
        <div className='countrys'>
            {
                countreisapi.map(country=><Countri handleVisitedCountries={handleVisitedCountries} country={country}></Countri>)
            }
        </div>
        </div>
    );
};

export default Countrys;