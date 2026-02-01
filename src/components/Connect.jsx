import React from 'react'
import assets from '../assets/assets'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Connect() {
   const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_50orjwf', 'template_jbs5x77', form.current, '34F__WzeVlEpmB7qk',
    )
    e.target.reset();
  };
  return (
    <div id='contact' className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
     <div className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <h1 className="text-3xl sm:text-5xl font-medium">Reach out to us</h1>
        <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>
      <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onSubmit={sendEmail} ref={form}>

        <div>
          <span className='mb-2 text-sm font-medium'>Your name</span>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
          <input type="text" placeholder='Enter your name'className='w-full p-3 text-sm outline-none' required name='name'/>
          </div>
        </div>

        <div>
          <span className='mb-2 text-sm font-medium'>Email id</span>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
          <input type="email" placeholder='Enter your email'className='w-full p-3 text-sm outline-none' required name='email'/>
        </div>
        </div>

        <div className='sm:col-span-2'>
          <span className='mb-2 text-sm font-medium'>Message</span>
          <textarea placeholder='Enter your message' rows={8} className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'></textarea>
        </div>
        <button type='submit'
              className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
              href="#contact"
            >
              Submit <img src={assets.arrow_icon} alt="" className='w-4'/>
            </button>
      </form>
    </div>
  )
}

export default Connect