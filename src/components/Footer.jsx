import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-16 pt-16 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium -tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">News</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">World</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Games</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">References</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer