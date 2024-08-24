import React from 'react'
import {Link} from "react-router-dom";

const BlogCards = ({blogs}) => {
    const filteredBlogs = blogs;
    // console.log(filteredBlogs)
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        {
            filteredBlogs.map((blog) => <Link to='' key={blog.id} className='p-5 shadow-lg rounded cursor-pointer '>
                <div>
                    <img src={blog.image} alt="" className='w-full' />
                </div>
                <h3 className='mb-2 mt-4 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2 text-gray-600 '>{blog.author}</p>
                <p>Published: { blog.published_date}</p>
            </Link>)
        }
    </div>
  )
}

export default BlogCards