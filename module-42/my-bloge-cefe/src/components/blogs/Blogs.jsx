import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setblogs]= useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])

    console.log(blogs);
    return (
        <div>
            <h1>total : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;