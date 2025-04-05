import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMark}) => {
    // const {blog}= props
    const {cover,title,author,author_img}= blog
    // console.log(blog);
    return (
        <div>
       

            <div className="blog-card">

            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={cover} />
  </figure>
  <div className="author-info flex items-center gap-2 justify-around py-0.5">
  <h1 className='text-2xl'>name: {author}</h1>
  <img className='w-16' src={author_img} alt="" />
  <button onClick={()=>handleBookMark(blog)}><FaBookmark size={25}/></button>
  </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

       <div className="hastag flex">
       {
            blog.hashtags.map((has)=><p>{has}</p>)
        }
       </div>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default Blog;