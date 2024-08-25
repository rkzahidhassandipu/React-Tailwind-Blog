import React from 'react'
import Banner from '../components/Banner';
import BlogsPage from '../components/BlogsPage';

const Home = () => {
  return (
    <div>
      <Banner />

      <div className='max-w-7xl mx-auto'>
        <BlogsPage />
      </div>

    </div>
  )
}

export default Home