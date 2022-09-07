import React, { useState } from "react";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <nav className="sticky top-0 bg-gradient-to-b from-gray-900 to-black flex justify-between p-4">
        <img
          className="w-10 cursor-pointer  "
          src="https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg"
          alt="logo"
        />
        
        <button className="rounded-lg border-2 font-bold duration-300 uppercase border-green-400  bg-black text-green-500 px-16 py-5 hover:bg-green-500 hover:text-black">
          Hire Me !
        </button>
        
        <ul className="hidden md:flex space-x-5 text-white uppercase items-center cursor-pointer ">
          <li className="hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-1">
            <a href="#home">home</a> 
          </li>
          <li className="hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-1">
           <a href="#education"> about </a>
          </li>
          <li className="hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-1">
            <a href="#contact">contact</a>
          </li>
        </ul>
        

        <button
          onClick={handleClick}
          className=" cursor-pointer md:hidden border-2 text-white border-green-500 rounded-full p-2"
        >
          expand
        </button>
      </nav>
      <ul className={!nav ? 'hidden': 'flex flex-col justify-center items-center py-36 text-white'}>
        <li className= "hover:border-b-orange-400 text-2xl py-8  hover:border-b-2 hover:text-blue-100 cursor-pointer ">
          home
        </li>
        <li className="hover:border-b-orange-400  text-2xl py-8 hover:border-b-2 hover:text-blue-100  cursor-pointer">
          about
        </li>
        <li className="hover:border-b-orange-400  text-2xl py-8 hover:border-b-2 hover:text-blue-100  cursor-pointer">
          contact
        </li>
        </ul>
    </div>
  );
}
