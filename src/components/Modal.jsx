import React from 'react'

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
        <div className='modal-container'>
            <div className='bg-indigo-700 text-center p-5  h-96 lg:w-[500px] rounded shadow-md'>
                <h2 className='text-xl font-extrabold mb-4 mt-6 uppercase'>Please Login Here!</h2>
                <form action="" className='px-4'>
                    <div>
                        <input type="email" name='email' id='email' placeholder='Example@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 mx-6 text-base font-medium text-[#6b7280]' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal