import React from 'react'
import assets from '../assets/assets'

function Footer() {
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
    <footer>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
         <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
        <ul className={`text-gray-700 dark:text-white sm:text-sm max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        {links.map(({ id, title, href }) => (
            <a href={href} key={id} className="sm:hover:border-b">
              {title}
            </a>
          ))} 
          </ul>
        </div>
      </div>

      <div>
        <div>
          <p>Subscribe to our newsletter</p>
          <p>The latest news, articals, and resources, sent to your inbox weekly.</p>
        </div>
        <div>
          <input type="email" name="" id="" />
          <button>Subscribe</button>
        </div>
      </div>
      <div>
        <div>
          <p>Copyright 2026 -All Right Reserved</p>
        </div>
        <div>
          <a href=""></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer