import React from 'react';

const Blog = ({blog}) => {
    // const {blog}= props
    const {cover,title,author}= blog
    console.log(blog);
    return (
        <div>
            <h1>hello blogs : </h1>

            <div className="blog-card">

            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={cover} />
  </figure>
  <h1 className='text-2xl'>name: {author}</h1>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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