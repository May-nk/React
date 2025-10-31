import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function LogosSection() {
  useEffect(() => {
    // Logo animation
    gsap.from(".section1-bottom img", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });
  }, []);

  return (
    <div className="section1-bottom h-[100px] w-full flex items-center justify-evenly">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
        alt="Amazon" 
        id="amazon"
        className="cursor-pointer h-[40px]"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1024px-HubSpot_Logo.svg.png" 
        alt="HubSpot"
        className="cursor-pointer h-[59px]"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" 
        alt="Netflix"
        className="cursor-pointer h-[59px]"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/1024px-Notion_app_logo.png" 
        alt="Notion"
        className="cursor-pointer h-[59px]"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zoom_Communications_Logo.svg/1024px-Zoom_Communications_Logo.svg.png" 
        alt="Zoom"
        className="cursor-pointer h-[59px]"
      />
    </div>
  );
}
