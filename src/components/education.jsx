import React from "react";
import Python from "../images/python.jpeg";
import C from "../images/c++.png";
import Htm from "../images/html.png";
import Css from "../images/css.png";
import Bootstrap from "../images/bootstrap.png";
import Js from "../images/js.png";
import Rea from "../images/react.png";
import Tailwind from "../images/tailwind.jpg";
import MongoDb from "../images/mongodb.webp";
import Njs from "../images/njs.png";
import Firebase from "../images/firebase.webp";

const main = () => {
  return (
    <div className="md:h-[80vh] bg-gray-300 ">
      <div className="flex py-14 justify-center">
        <h1 className="text-4xl py-8 font-bold">SKILLS</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-around md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={Python} alt="" />
              <span className=" uppercase py-6">Python</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={C} alt="" />
              <span className=" uppercase py-6">C++</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={Htm} alt="" />
              <span className=" uppercase py-6">HTML</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={Css} alt="" />
              <span className=" uppercase py-6">CSS</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={Js} alt="" />
              <span className=" uppercase py-6">javascript</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={Rea} alt="" />
              <span className=" uppercase py-6">React</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-24 rounded-xl" src={Bootstrap} alt="" />
              <span className=" uppercase py-6">Bootstrap</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-center items-center text-2xl font-bold">
              <img className="w-20 rounded-xl" src={Tailwind} alt="" />
              <span className=" uppercase py-6">Tailwind</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-36 rounded-xl" src={MongoDb} alt="" />
              <span className=" uppercase py-6">mongodb</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-36 rounded-xl" src={Firebase} alt="" />
              <span className=" uppercase py-6">Firebase</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default main;
