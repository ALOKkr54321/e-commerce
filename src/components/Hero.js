import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20 ">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold  text-white flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-white"></div>
            Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] text-white font-semibold mb-4">Find Everything Here<br />
          <span className="font-light">new collection</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold text-white  bg-teal-500 border-2 p-5 rounded-xl  hover:bg-white hover:text-teal-500'>Discover More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
