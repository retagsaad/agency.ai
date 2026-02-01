import React from 'react'
import assets from '../assets/assets'

function Connect() {
  return (
    <div>
     <div className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <h1 className="text-3xl sm:text-5xl font-medium">Reach out to us</h1>
        <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>
      <div>
        <div>
          <span>Your name</span>
          <input type="text" placeholder='Enter your name'/>
        </div>
        <div>
          <span>Email id</span>
          <input type="text" placeholder='Enter your email'/>
        </div>
        <div>
          <span>Message</span>
          <textarea placeholder='Enter your message'></textarea>
        </div>
        <a
              className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
              href="#contact"
            >
              Connect <img src={assets.arrow_icon} width={14} alt="" />
            </a>
      </div>
    </div>
  )
}

export default Connect