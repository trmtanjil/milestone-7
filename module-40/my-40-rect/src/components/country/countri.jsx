 import { useState } from "react";
import "./country.css"


const Countri = ({country}) => {
 const [visited, setVisited] = useState(false);
    const handeleVisited=()=>{
    //   if(visited ===true){
    //     setVisited(false);
    //   }
    //   else{
    //     setVisited(true)
    //   }

   setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'country-visited' }`}>
            <h3>name :{country.name.common
            } </h3>
            <img src={country.flags.png} alt="" /> 
            <p>independent : {country.independent ? ' free': ' not free'}</p>
            <p>country lend : {country.area} sqr mils</p>
            <button className={visited ? 'btn-visited': 'btn-not-visited'} onClick={handeleVisited}>
                {
                    visited ?'visited': 'not visited'
                }
            </button>
        </div>
    );
};

export default Countri;