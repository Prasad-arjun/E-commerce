import "../index.css"
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import X from "@mui/icons-material/X";

const Footer = () => {
  return (<>
    <div className="h-[25vh] flex relative bg-[#f5e7e7] w-full">
      <div className=" mx-auto flex flex-col justify-center items-center  ">
        <ul className="flex flex-wrap justify-center mb-5">
          <li className="mx-4">
            <a href="https://www.instagram.com/prasad_arjun.27?igshid=YmMyMTA2M2Y%3D" target="blank" className="hover:scale-105">
        <InstagramIcon sx={{color:"purple"}}/>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.linkedin.com/in/arjunp27/" target="blank">
            <LinkedInIcon sx={{color:"blue"}}/>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://twitter.com/__arjunPrasad" target="blank" >
         <X/>
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap justify-center mb-4">
         <p>An ecommerce web app made with ❤️</p>
        </div>
        <p className=" ">&copy;2024 Arjun Prasad | All Rights Reserved</p>
      </div>
    </div>
    </>)
};

export default Footer