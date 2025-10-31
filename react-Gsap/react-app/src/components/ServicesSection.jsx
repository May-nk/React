import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  useEffect(() => {
    // Page 2 animation - services section
    gsap.from(".services h2", {
      x: -70,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".services h2",
        scroller: "body",
        start: "top 50%",
      }
    });

    gsap.from(".services p", {
      x: 70,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".services p",
        scroller: "body",
        start: "top 50%",
      }
    });

    // Animate service elements
    gsap.from(".elem", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        start: "top 70%",
      }
    });

  }, []);

  return (
    <div className="section2 mt-[100px]">
      {/* Services Header */}
      <div className="services py-[20px] px-[50px] flex items-center">
        <h2 className="text-[2.5rem] font-extrabold py-[2px] px-[10px] bg-[#b9ff66] rounded-[15px]">
          Services
        </h2>
        <p className="text-[1.3rem] font-semibold w-[55%] p-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione eveniet ea, 
          ut accusamus facilis ad saepe deserunt amet quos reiciendis. Aliquid excepturi hic odio. 
          Asperiores, temporibus fuga. Accusamus, reiciendis!
        </p>
      </div>

      {/* Services Grid */}
      <div className="container h-[110%] w-full py-[40px] px-[120px] flex justify-between flex-wrap">
        
        {/* Search Engine Optimization */}
        <div className="elem flex-shrink-0 h-[400px] w-[47%] border-2 border-black rounded-[30px] p-[55px] shadow-[0px_15px_0px_black] flex">
          <div className="elem-part1 h-full w-[50%] flex items-start justify-between flex-col">
            <h2 className="text-[45px] w-[82%] py-0 px-[4px] rounded-[10px] font-semibold bg-[#b9ff66]">
              Search Engine Optimization
            </h2>
            <h4 className="flex items-center text-[26px] font-medium gap-[20px]">
              <i className="p-[5px] bg-black text-white rounded-full">→</i>
              Learn more
            </h4>
          </div>
          <div className="elem-part2 h-full w-[50%] flex items-center justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" 
              alt="SEO Icon"
              className="h-[65%] object-contain"
            />
          </div>
        </div>

        {/* Pay Per Click Advertisement */}
        <div className="elem black bg-black flex-shrink-0 h-[400px] w-[47%] border-2 border-black rounded-[30px] p-[55px] shadow-[0px_15px_0px_black] flex">
          <div className="elem-part1 h-full w-[50%] flex items-start justify-between flex-col">
            <h2 className="text-[45px] bg-white w-[85%] py-0 px-[4px] rounded-[10px] font-semibold">
              Pay per click advertisement
            </h2>
            <h4 className="flex items-center text-[26px] font-medium gap-[20px] text-white">
              <i className="p-[5px] bg-black text-white rounded-full">→</i>
              Learn more
            </h4>
          </div>
          <div className="elem-part2 h-full w-[50%] flex items-center justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" 
              alt="PPC Icon"
              className="h-[65%] object-contain"
            />
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="elem black bg-black flex-shrink-0 h-[400px] w-[47%] border-2 border-black rounded-[30px] p-[55px] shadow-[0px_15px_0px_black] flex">
          <div className="elem-part1 h-full w-[50%] flex items-start justify-between flex-col">
            <h2 className="l text-[45px] bg-white w-[60%] py-0 px-[4px] rounded-[10px] font-semibold">
              Social media marketing
            </h2>
            <h4 className="flex items-center text-[26px] font-medium gap-[20px] text-white">
              <i className="p-[5px] bg-black text-white rounded-full">→</i>
              Learn more
            </h4>
          </div>
          <div className="elem-part2 h-full w-[50%] flex items-center justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" 
              alt="Social Media Icon"
              className="h-[65%] object-contain"
            />
          </div>
        </div>

        {/* Email Marketing */}
        <div className="elem flex-shrink-0 h-[400px] w-[47%] border-2 border-black rounded-[30px] p-[55px] shadow-[0px_15px_0px_black] flex">
          <div className="elem-part1 h-full w-[50%] flex items-start justify-between flex-col">
            <h2 className="r text-[45px] w-[65%] py-0 px-[4px] rounded-[10px] font-semibold bg-[#b9ff66]">
              E-mail marketing
            </h2>
            <h4 className="flex items-center text-[26px] font-medium gap-[20px]">
              <i className="p-[5px] bg-black text-white rounded-full">→</i>
              Learn more
            </h4>
          </div>
          <div className="elem-part2 h-full w-[50%] flex items-center justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" 
              alt="Email Marketing Icon"
              className="h-[65%] object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
