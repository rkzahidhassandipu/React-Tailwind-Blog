import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0]

  return (
    <div>
        <div>
            <h2>Single Blog Page</h2>
        </div>
    </div>
  )
}

export default SingleBlog