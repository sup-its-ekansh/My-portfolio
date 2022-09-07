import React from "react";
import Calculator from "../images/calc.png";
import Todo from "../images/to-do.png";
import Compound from "../images/compound.png";
import Xecart from "../images/xecart.jpeg";

const work = () => {
  return (
    <div className="flex md:mt-20 flex-col">
      <div className="flex justify-center md:justify-start ">
        <h1 className="text-6xl py-14 px-16 text-white font-bold">MY PROJECTS</h1>
      </div>
      <div className="flex-col px-8">
        <div className="flex py-44 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="md:w-1/3 px-8">
            <img className="w-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer rounded-3xl  h-96 md:w-96" src={Todo} alt="" />
          </div>
          <div className="  font-bold  p-8 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
        </div>
        <div className="flex py-44 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="  font-bold  p-8  text-white text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
          <div className="md:w-1/3 px-8">
            <img
              className="w-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl h-96 md:w-96"
              src={Compound}
              alt=""
            />
          </div>
        </div>

        <div className="flex py-44 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="md:w-1/3 px-8">
            <img
              className="w-72transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  rounded-3xl h-96 md:w-96"
              src={Xecart}
              alt=""
            />
          </div>
          <div className="  font-bold  p-8  text-yellow-200 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
