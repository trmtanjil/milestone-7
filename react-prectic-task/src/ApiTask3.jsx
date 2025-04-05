import React, { use } from 'react';
import Task3User from './Task3User';

const ApiTask3 = ({faceUser}) => {
const apifetch = use(faceUser)
console.log(apifetch);
    return (
        <div style={{
            border:'2px solid red',
            borderRadius: '10px'
        }}>
            <h2 >api data faching</h2>
            <p>user length :{apifetch.length}</p>

        {
            apifetch.map(apiuser =><Task3User key={apiuser.id} apiuser={apiuser}></Task3User>)
        }
           
        </div>
    );
};

export default ApiTask3;