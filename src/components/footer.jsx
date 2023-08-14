import React from "react";

const contact = () => {
  return (
    <div className="flex flex-col md:flex-row  sm:justify-around">
      <div>
        <div className="text-6xl  text-white mb-11">Contact Me</div>
        <p className="text-white my-6 text-xl">
          <i class="mr-5 fa-regular text-[#9b59b6]  fa-envelope"></i>gargekanshekanshgarg@gmail.com
        </p>
        <p className="text-xl text-white">
          <i class="mr-5 fa-solid   fa-phone text-[#9b59b6]"></i>7303500849
        </p>
        <div className="flex transform transition duration-500 justify-between mt-10">
                        <a className="transform transition duration-500 hover:-translate-y-1" href="https://www.facebook.com/profile.php?id=100010455338404"><i class="fa-brands text-gray-400  hover:text-white   text-4xl fa-facebook"></i></a>
                        <a className="transform transition duration-500 hover:-translate-y-1" href="https://twitter.com/sup_its_ekansh"><i class="fa-brands text-gray-400 text-4xl hover:text-white fa-twitter-square "></i></a>
                        <a className="transform transition duration-500 hover:-translate-y-1" href="https://www.instagram.com/sup_its_ekansh/?next=%2F"><i class="fa-brands text-gray-400 hover:text-white text-4xl  fa-instagram"></i></a>
                        <a className="transform transition duration-500 hover:-translate-y-1" href="https://www.linkedin.com/feed/"><i class="fa-brands text-gray-400 text-4xl hover:text-white fa-linkedin "></i></a>
                    </div>
      </div>
      <div>
       <form>
                        <input className="w-full outline-none p-[15px] mt-[15px] text-base rounded-md"  type="text" name="Name" placeholder="Your Name" required/>
                        <input className="w-full outline-none p-[15px] mt-[15px] text-base rounded-md" type="email" name="email" placeholder="Your Email" required/>
                        <textarea className="w-full outline-none p-[15px] mt-[15px] text-base rounded-md" name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button className="p-3 text-white rounded-md my-12 mx-auto bg-px-16  bg-[#9b59b6] text-base mt-5 cursor-pointer block w-fit" type="submit" >Submit</button>
                    </form>
      </div>
    </div>
    
  );
};

export default contact;
