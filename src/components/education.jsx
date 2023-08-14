import React from "react";


const main = () => {
  return (
<div id="target" className="h-400 bg-black ">
      <div className="flex justify-center">
        <h1 className="text-4xl text-white py-8 font-bold">SKILLS</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-50px p-20 sm:grid-cols-2 md:grid-cols-3 relative w-full">
                <div className="bg-[#262626] text-white  p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer ">
                    <i className="mb-[30px]" class="fa-2x fa-brands fa-python"></i>
                    <h2 className="text-[30px] font-bold mb-15px">Python</h2>
                    <p>Versatile, high-level programming language for web, data, automation, and AI. Simple syntax fosters rapid development and broad applications.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://docs.python.org/3/">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-30" class="fa-2x fa-brands fa-html5"></i>
                    <h2 className="text-[30px] font-bold mb-15px">HTML</h2>
                    <p>Proficient in crafting structured web content. Skilled in semantic elements, forms, and accessibility for creating user-friendly web interfaces.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white  p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-30" class="fa-2x fa-brands fa-css3-alt"></i>
                    <h2 className="text-[30px] font-bold mb-15px">CSS</h2>
                    <p>Proficient in styling web interfaces. Skilled in layout, responsiveness, and design principles to enhance user experiences across devices.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://devdocs.io/css/">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white  p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-[30px]" class="fa-2x fa-brands fa-square-js"></i>
                    <h2 className="text-[30px] font-bold mb-15px">JavaScript</h2>
                    <p>Proficient in scripting dynamic web interactions. Skilled in DOM manipulation, APIs, and creating engaging user interfaces for seamless browsing.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-30" class="fa-2x fa-brands fa-react"></i>
                    <h2 className="text-[30px] font-bold mb-15px">ReactJS</h2>
                    <p>Experienced in building interactive user interfaces. Proficient in components, state management, and virtual DOM for creating dynamic web applications.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://legacy.reactjs.org/docs/getting-started.html">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white  p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-30" class="fa-2x fa-brands fa-file-code"></i>
                    <h2 className="text-[30px] font-bold mb-15px">Tailwind</h2>
                    <p>Skilled in using utility-first framework. Proficient in rapid UI development, responsive designs, and streamlined styling for web projects.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://v2.tailwindcss.com/docs">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white  p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-[30px]" class="fa-2x fa-brands fa-codepen"></i>
                    <h2 className="text-[30px] font-bold mb-15px">Redux</h2>
                    <p>Experienced in managing state for complex web applications. Proficient in actions, reducers, and centralizing data flow for scalable frontends.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://redux.js.org/">Learn more</a>
                </div>
                <div className="bg-[#262626] text-white p-10 rounded-lg text-13px font-light transition duration-500 hover:bg-[#9b59b6] transform hover:-translate-y-6 cursor-pointer">
                    <i className="mb-30" class="fa-2x fa-brands fa-code-branch"></i>
                    <h2 className="text-[30px] font-bold mb-15px">Firebase</h2>
                    <p>Proficient in leveraging cloud platform. Skilled in real-time databases, authentication, and hosting for building dynamic and secure web applications.</p>
                    <a className="text-no-underline text-white text-[20px] mt-[40px] inline-block" href="https://firebase.google.com/docs">Learn more</a>
                </div>
                
            </div>
            
    </div>
  );
};

export default main;