import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  useEffect(() => {
    // Page 1 animation sequence
    const tl = gsap.timeline();
    
    tl.from(".center-part1 h1", {
      x: -300,
      opacity: 0,
      duration: 0.3,
    });
    
    tl.from(".center-part1 p", {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
    
    tl.from(".center-part1 button", {
      opacity: 0,
    });
    
    tl.from(".center-part2 img", {
      opacity: 0,
    }, "-=1");

  }, []);

  return (
    <div className="section1 h-full w-full relative">
      <div className="center p-[50px] h-[85%] w-full flex">
        <div className="center-part1 h-full w-[45%] flex flex-col justify-center">
          <h1 className="text-[90px] leading-tight font-normal">
            Navigating the digital landscape for success
          </h1>
          <p className="text-[25px] w-[90%] mb-[30px] mt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
            dolores modi, quae magnam quisquam ut expedita assumenda debitis 
            praesentium recusandae in!
          </p>
          <button className="cursor-pointer py-[10px] px-[20px] text-[20px] font-semibold bg-black text-white rounded-[10px] border-none">
            Book a consultation
          </button>
        </div>
        <div className="center-part2 h-full w-[60%] flex items-center justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
            alt="Digital landscape"
            className="absolute top-[18%] h-[75%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
