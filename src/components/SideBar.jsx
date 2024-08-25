import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not working')
            }
            return res.json();
        })
        .then(data => {
            setPopularBlogs(data.slice(0, 15));
            setLoading(false)
        })
        .catch(err => {
            setError(err.message);
            setLoading(false)
        })
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
            <div >
                {popularBlogs.slice(0, 5).map(blog => (
                    <div className='my-5 border-b-2 border-spacing-2 px-4' key={blog.id}>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to='/' className='text-base pb-2 font-medium hover:text-orange-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2' /></Link>
                    </div>
                ))}
            </div>
        </div>
        {/* Popular blog */}
        <div>
            <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
            <div >
                {popularBlogs.slice(6, 10).map(blog => (
                    <div className='my-5 border-b-2 border-spacing-2 px-4' key={blog.id}>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to='/' className='text-base pb-2 font-medium hover:text-orange-500 inline-flex items-center py-1'>Read more <FaArrowRight className='mt-1 ml-2' /></Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SideBar