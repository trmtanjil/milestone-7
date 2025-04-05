import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';

const Blogs = ({ handleBookMark,handleReadingCount }) => {
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

            <div className="all-blogs grid md:grid-cols-2 gap-1 justify-center mx-auto">
                {
                    blogs.map((blog)=><Blog blog={blog} key={blog.id} handleBookMark={handleBookMark} handleReadingCount={handleReadingCount} ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;