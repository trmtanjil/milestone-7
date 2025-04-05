import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';

const Blogs = () => {
    const [blogs,setblogs]= useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])

    // console.log(blogs);
    return (
        <div>
            <h1>total : {blogs.length}</h1>

            <div className="all-blogs">
                {
                    blogs.map((blog)=><Blog blog={blog} ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;