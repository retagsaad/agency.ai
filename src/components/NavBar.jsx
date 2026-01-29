import React, { useState } from "react";
import "../css/navbar.css";
import assets from "../assets/assets";

function NavBar( {theme, setTheme }) {
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
      href: "contact",
    },
  ];

  const [sideBar,setSideBar]=useState(false)
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=""
      />

        <ul className={`text-gray-700 dark:text-white sm:text-sm ${!sideBar?'max-sm:w-0 overflow-hidden': 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
          <img src={assets.close_icon} alt="" className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=>setSideBar(false)}/>
          {links.map(({ id, title, href }) => (
            <a href={href} key={id} className="sm:hover:border-b">
              {title}
            </a>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-4">
          <img src={theme==='dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setSideBar(true)} className="w-8 sm:hidden"/>
          
            <button>
              {theme ==='dark' ? (<img onClick={()=> setTheme('light')} src={assets.sun_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full"/>) : (<img onClick={()=> setTheme('dark')} src={assets.moon_icon_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full"/>)}
            </button>
            <a onClick={()=>setSideBar(false)}
              className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
              href="#contact"
            >
              Connect <img src={assets.arrow_icon} width={14} alt="" />
            </a>
        </div>
    </div>
  );
}

export default NavBar;
