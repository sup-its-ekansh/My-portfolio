import React from "react";
import Image from "../images/image.jpg";


const intro = () => {
  return (
    <div id="home" className=" md:mb-96  bg-black flex md:flex-row md:pl-10 flex-col-reverse md:justify-around justify-center items-center py-32  ">
      <div className="md:w-1/3 mt-12 md:flex md:justify-center">
      
        <button className="p-8 hover:bg-orange-500 duration-200 hover:border-orange-500  rounded-3xl text-3xl border-green-200 border-2 text-white">
          Explore 
        </button>
      </div>
      <div className="md:flex md:items-center md:w-2/3 md: md:justify-around ">
        <div>
          <div className="w-80  border-gray-300 border-8 rounded-full">
            <img className="image w-60 mx-7 rounded-full" src={Image} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h1 className="text-6xl mt-8 font-bold text-green-200">Frontend</h1>
            <h1 className="text-6xl mt-3 font-bold text-green-200">
              Developer
            </h1>
          </div>
        </div>
        
        <div className="flex flex-col justify-center md:w-1/2 items-center">
          <h1 className="text-xl font-bold md:text-3xl mt-8 text-indigo-200">
            I like to craft,different solid web{" "}
          </h1>
          <h1 className="text-xl font-bold md:text-3xl text-indigo-200">
            designs with better efficiency and{" "}
          </h1>
          <h1 className="text-xl font-bold md:text-3xl text-indigo-200">
            nice user experience{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default intro;
