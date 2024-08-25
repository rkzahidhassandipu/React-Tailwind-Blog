import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-16 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-6'>
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

                    <div>
                        <p className='font-medium -tracking-wide text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Web</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">eCommerce</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Business</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Entertainment</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Portfolio</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <p className='font-medium -tracking-wide text-gray-300'>Cherry</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Media</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Borchure</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Nonprofit</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Education</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-medium -tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Infopreneur</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Personal</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Wiki</a>
                            </li>
                            <li>
                                <a className='text-gray-500 transition-colors duration-500 hover:text-orange-500' href="">Forum</a>
                            </li>
                        </ul>
                    </div>

                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300'>Subscribe for Updates</p>
                        <form action="" className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition-all duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
                        </form>
                        <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum officiis optio, rerum repellat fugiat sit laudantium illum tempora itaque animi fugit magnam tempore! Consectetur similique sint ipsum recusandae fuga molestias!</p>
                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-between pt-5 pb-10 mt-8 border-t border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-500 '>&copy; Copyright 2024 || All right resereved.</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500 '><FaTwitter className='h-6 w-6' /></a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500 '><FaInstagram className='h-6 w-6' /></a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500 '><FaFacebook className='h-6 w-6' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer