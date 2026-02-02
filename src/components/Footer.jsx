import React from 'react'
import assets from '../assets/assets'

function Footer({theme}) {
  const links = [
    {
      id: 1,
      title: "Home",
      href: "#",
    },
    {
      id: 2,
      title: "Services",
      href: "#services",
    },
    {
      id: 3,
      title: "Our Work",
      href: "#work",
    },
    {
      id: 4,
      title: "Contact Us",
      href: "#contact",
    },
  ];
  return (
    <footer className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-44'/>
         <p className="max-w-md">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
        <ul className='flex gap-8'>
        {links.map(({ id, title, href }) => (
            <a href={href} key={id} className="hover:text-primary">
              {title}
            </a>
          ))} 
          </ul>
          </div>
      

      <div className='text-gray-600 dark:text-gray-400'>
        
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articals, and resources, sent to your inbox weekly.</p>
        
        <div className='flex gap-2 text-sm'>
          <input type="email" name="" id="" className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
          <button className='bg-primary text-white rounded px-6'>Subscribe</button>
        </div>
      </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6'/>
      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
          <p>Copyright 2026 -All Right Reserved</p>
        <div className='flex items-center justify-between gap-4'>
          <img src={assets.facebook_icon} alt="" /><a href="https://www.facebook.com/"></a>
          <img src={assets.twitter_icon} alt="" /><a href="https://x.com/X."></a>
          <img src={assets.instagram_icon} alt="" /><a href="https://www.instagram.com/"></a>
          <img src={assets.linkedin_icon} alt="" /><a href="https://www.linkedin.com/feed/"></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer