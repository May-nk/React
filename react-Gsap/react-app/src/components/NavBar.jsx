import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function NavBar() {
  useEffect(() => {
    // Page 1 animation - nav elements
    const tl = gsap.timeline();
    tl.from("nav .part1 h1, nav .part2 h4, nav .part2 button", {
      y: -30,
      duration: 0.6,
      opacity: 0,
      stagger: 0.15,
    });
  }, []);

  return (
    <nav className="flex items-center justify-between py-[40px] px-[50px]">
      <div className="part1">
        <h1 className="text-[2.5rem] font-normal cursor-pointer">YourBrand</h1>
      </div>
      <div className="part2 cursor-pointer flex items-center justify-center gap-[40px]">
        <h4 className="text-[1.7rem] font-medium">Section</h4>
        <button className="py-[10px] px-[20px] text-[1.2rem] bg-transparent rounded-[10px] font-semibold border border-black">
          Button
        </button>
      </div>
    </nav>
  );
}
