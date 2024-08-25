import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0]

  return (
    <div>
        <div>
            <h2>Single Blog Page</h2>
        </div>

        <div className='max-w-7xl mx-auto my-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'>
                    <FaUser className='inline-flex items-center mr-2' />
                    {author} | {published_date}
                </p>
                <p className='mb-3 text-gray-600'>
                    <FaClock className='inline-flex items-center mr-2' />
                    {reading_time}
                </p>
                <p className='mb-3 text-gray-600 text-base'>
                    {content}
                </p>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog