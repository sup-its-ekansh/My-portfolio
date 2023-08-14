import React, { useState } from "react";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <nav className="fixed w-full z-200 top-0 bg-gradient-to-b from-gray-900 to-black flex justify-between p-4">
        <img
          className="w-10 cursor-pointer  "
          src="https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg"
          alt="logo"
        />
        <a
          href="https://drive.google.com/file/d/1wxnksP-1RUsfwuD0Le47qoY2PgkGEcVv/view?usp=sharing"
          className="py-2 rounded transition duration-300rounded-lg border-2 uppercase border-green-400  bg-black text-green-500 px-10 hover:bg-green-500 hover:text-black"
        >
          <span className="normal-text">Hire Me</span>
          <span className="hover-text hidden">Download CV</span>
        </a>
        <ul className="hidden md:flex space-x-5 text-white uppercase items-center cursor-pointer ">
          <li className="hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-1">
            home
          </li>
          <li className="hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-1">
            about
          </li>
          <li className="hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-1">
            contact
          </li>
        </ul>

        <button
          onClick={handleClick}
          className="cursor-pointer md:hidden border-2 text-white border-green-500 rounded-full p-2"
        >
          expand
        </button>
      </nav>
      <ul
        className={
          !nav
            ? "hidden"
            : "flex flex-col justify-center items-center py-36 text-white"
        }
      >
        <li className="hover:border-b-orange-400 text-2xl py-8  hover:border-b-2 hover:text-blue-100 cursor-pointer ">
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
