import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import amazonLogo from "../assets/amazon.png";
import hubspotLogo from "../assets/HubSpot-Logo.png";
import netflixLogo from "../assets/Netflix-Logo.png";
import notionLogo from "../assets/Notion-Emblem.png";
import zoomLogo from "../assets/Zoom-Logo.png";

export default function LogosRow() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".section1-bottom img", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="section1-bottom h-[100px] w-full flex items-center justify-evenly"
    >
      <img src={amazonLogo} alt="Amazon" className="cursor-pointer h-[40px]" id="amazon" />
      <img src={hubspotLogo} alt="HubSpot" className="cursor-pointer h-[59px]" />
      <img src={netflixLogo} alt="Netflix" className="cursor-pointer h-[59px]" />
      <img src={notionLogo} alt="Notion" className="cursor-pointer h-[59px]" />
      <img src={zoomLogo} alt="Zoom" className="cursor-pointer h-[59px]" />
    </div>
  );
}
