import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs`;

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data)
        }
        fetchBlogs();
    }, []);
  return (
    
    <div>
        {/* category section */}
        <div>Page Category</div>

        {/* blogcards section */}
        <div>
            <BlogCards blogs={blogs} />
        </div>

        {/* pagination section */}
        <div>

        </div>
    </div>
  )
}

export default BlogsPage