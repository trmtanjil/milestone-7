 

const Countri = ({country}) => {
 
    console.log(country);
    return (
        <div>
            <h3>name :{country.name.common
            } </h3>
            <img src={country.flags.png} alt="" /> 
            <p>independent : {country.independent ? ' free': ' not free'}</p>
            <p>country lend : {country.area} sqr mils</p>
        </div>
    );
};

export default Countri;