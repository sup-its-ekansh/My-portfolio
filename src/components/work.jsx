import React from "react";
import Calculator from "../images/calc.png";
import Todo from "../images/to-do.png";
import Compound from "../images/compound.png";
import Xecart from "../images/xecart.jpeg";

const work = () => {
  return (
    <div className="flex md:mt-20 flex-col">
      <div className="flex justify-center md:justify-start ">
        <h1 className="text-6xl py-14 px-16 text-white font-bold">
          MY PROJECTS
        </h1>
      </div>
      <div className="flex-col px-8">
        <div className="flex py-44 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="md:w-1/3 px-8">
            <img
              className="w-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 cursor-pointer rounded-3xl  h-96 md:w-96"
              src={Todo}
              alt=""
            />
          </div>
          <div className="  font-bold  p-8 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              <ul>
                <li className="py-6">
                  <h1 className="text-6xl Font-bold">Project Name- To-Do List</h1>
                </li>
                <li className="text-2xl text-white mb-10">
                  In this project i created a To-Do app using HTML, CSS, Javascript, Firebase. In this i've used Firebase Auth and other libraies too
                </li>
                <li>
                  <button className="rounded-lg border-2 font-bold duration-300 uppercase border-green-400   bg-black text-green-500 px-16 py-2 hover:bg-green-500 hover:text-black">
                    Visit
                  </button>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse py-44 md:flex-row justify-center items-center md:justify-between ">
          <div className="  font-bold  p-8  text-white text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              <ul>
                <li className="py-6">
                  <h1 className="text-6xl Font-bold">Project Name- Compond Clone</h1>
                </li>
                <li className="text-2xl text-yellow-200 mb-10">
                 In this project i made a clone of a site called Compound.fininace using Bootstrap, HTML, CSS and JavaScript{" "}
                </li>
                <li>
                  <button className="rounded-lg border-2 font-bold duration-300 uppercase border-green-400   bg-black text-green-500 px-16 py-2 hover:bg-green-500 hover:text-black">
                    Visit
                  </button>
                </li>
              </ul>
            </p>
          </div>
          <div className="md:w-1/3 px-8">
            <img
              className="w-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 rounded-3xl h-96 md:w-96"
              src={Compound}
              alt=""
            />
          </div>
        </div>

        <div className="flex py-44 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="md:w-1/3 px-8">
            <img
              className="w-72transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150  rounded-3xl h-96 md:w-96"
              src={Xecart}
              alt=""
            />
          </div>
          <div className="  font-bold  p-8  text-yellow-300  rounded-3xl md:w-2/3 px-8   ">
            <p>
              <ul>
                <li className="py-6">
                  <h1 className="text-6xl Font-bold">Project Name- Xecart</h1>
                </li>
                <li className="text-2xl text-indigo-200 mb-10">
                  In this Project i designed an e-commerce site "XeCart" using
                  HTML, CSS, Bootstrap{" "}
                </li>
                <li>
                  <button className="rounded-lg border-2 font-bold duration-300 uppercase border-green-400   bg-black text-green-500 px-16 py-2 hover:bg-green-500 hover:text-black">
                    Visit
                  </button>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
