import React, { useState } from 'react';

const Hideshow = () => {
    const [isVisible, setisVisibel]= useState(false)

    const HideShowText =()=>{
        setisVisibel(!isVisible)
    }

    return (
        <div>
            <h1>Show Hide tast 2</h1>
        {
            isVisible && <p>HI React lerner</p>
        }

            <button onClick={HideShowText}>{isVisible ? 'Hide': 'Show'}</button>
        </div>
    );
};

export default Hideshow;