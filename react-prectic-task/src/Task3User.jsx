import React from 'react';

const Task3User = ({apiuser}) => {
    
    console.log(apiuser);
    return (
        <div div style={{
            border:'2px solid green',
            borderRadius: '10px',
            margin: '10px'
        }}>
            <h4>name:{apiuser.name} </h4>
            <p>Company name : {apiuser.company.name}</p>
            <p>city name : {apiuser.address.city}</p>
        </div>
    );
};

export default Task3User;