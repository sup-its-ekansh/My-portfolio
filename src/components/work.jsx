import React from "react";

import Netflix from "../images/Netflix.png";
import Compound from "../images/compound.png";
import Discord  from "../images/disc.png";

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
          <div className="md:w-1/3 flex-1 px-8">
            <img
              className="w-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 cursor-pointer rounded-3xl  h-96 md:w-96"
              src={Netflix}
              alt=""
            />
          </div>
          <div className="  font-bold  p-8 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              <ul>
                <li className="py-6">
                  <h1 className="text-6xl Font-bold">
                    Project Name- Netflix Clone
                  </h1>
                </li>
                <li className="text-2xl text-white mb-10">
                  Developed a Netflix clone using React, Redux, Tailwind CSS,
                  JavaScript, Firebase, and Stripe payment API. Users can browse
                  movies, select subscription plans, and securely purchase them
                  through Stripe.
                </li>
                <li>
                  <a href="https://netflix-new-aaffc.web.app/" className="rounded-lg border-2 font-bold duration-300 uppercase border-green-400   bg-black text-green-500 px-16 py-2 hover:bg-green-500 hover:text-black">
                    Visit
                  </a>
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
                  <h1 className="text-6xl Font-bold">
                    Project Name- Compond Clone
                  </h1>
                </li>
                <li className="text-2xl text-yellow-200 mb-10">
                  In this project i made a clone of a site called
                  Compound.fininace using Bootstrap, HTML, CSS and JavaScript{" "}
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
              className="w-72 transform transition duration-500 hover:-translate-y-1 rounded-3xl h-96 md:w-96"
              src={Discord}
              alt=""
            />
          </div>
          <div className="  font-bold  p-8  text-yellow-300  rounded-3xl md:w-2/3 px-8   ">
            <p>
              <ul>
                <li className="py-6">
                  <h1 className="text-6xl Font-bold">Project Name- Discord Clone</h1>
                </li>
                <li className="text-2xl text-indigo-200 mb-10">
                I developed a Discord clone with features like sending messages, creating multiple channels, and incorporating Google
                authentication for seamless sign-in. This clone allows users to
                communicate in real-time, organize discussions into separate
                channels, and authenticate their accounts using their Google
                credentials. {" "}
                </li>
                <li>
                  <a href="https://discord-clone-c7e2f.web.app" className="rounded-lg border-2 font-bold duration-300 uppercase border-green-400   bg-black text-green-500 px-16 py-2 hover:bg-green-500 hover:text-black">
                    Visit
                  </a>
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
