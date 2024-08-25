import React from 'react';

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
        <div className='modal-container'>
            <div className='bg-indigo-700 text-center p-5  h-96 lg:w-[500px] rounded shadow-md'>
                <h2 className='text-xl font-extrabold mb-4 mt-6 uppercase'>Please Login Here!</h2>
                <form action="" className='px-4'>
                    <div className='mb-5'>
                        <input type="email" name='email' id='email' placeholder='Example@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6b7280]' />
                    </div>
                    <div className='mb-5'>
                        <input type="password" name='password' id='password' placeholder='Enter yor password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6b7280]' />
                    </div>

                    <div>
                        <button className='mr-5 hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                        <button className='ml-5 bg-gray-300 hover:bg-gray-400 duration-300 text-gray-800 font-semibold py-3 px-8 rounded inline-flex items-center mt-5'>Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal