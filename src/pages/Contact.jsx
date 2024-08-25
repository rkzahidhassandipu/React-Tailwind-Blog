import React from 'react'
import ContactForm from '../components/Contactpage'

const Contact = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Page</h1>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact