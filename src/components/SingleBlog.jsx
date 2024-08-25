import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0]

  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h1>
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

                <div className='text-base text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam doloribus qui asperiores aliquam totam blanditiis sed sequi molestiae ratione eaque error modi, quasi repudiandae praesentium eius! Id, necessitatibus voluptatibus? Possimus!</p><br />
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam fuga saepe nesciunt. Nisi eveniet eos doloribus sint et, tempore, quae commodi, id fugiat dicta sapiente quia neque maxime recusandae.</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cumque illo voluptates a, tenetur nobis corrupti sunt totam enim maxime? Quasi nihil adipisci nisi consectetur, vel quae distinctio praesentium dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo quae repudiandae odit reiciendis. Nesciunt sequi ipsum officia voluptatum aspernatur nobis odit nostrum necessitatibus, numquam eum ipsa asperiores debitis quo.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog