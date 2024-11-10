"use client"
import Image from "next/image"
import resumebuilder from "../public/images/resumebuilder.png"
import logo3 from "../public/images/logo3.png"


function Nav() {
    return (
      <div className="bg-gradient-to-t from-[#010C0F] to-[#104551] flex items-center justify-between h-[60px] w-full px-4 sm:px-12 sticky top-0 z-50">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <Image src={resumebuilder} alt="resumelogo" className="w-[150px] h-[30px] sm:w-[210px] sm:h-[40px]" />
        </div>
        
        {/* Right Logo */}
        <div className="flex-shrink-0">
          <Image src={logo3} alt="logo" className="w-[180px] h-[40px] sm:w-[250px] sm:h-[60px]" />
        </div>
      </div>
    );
  }
  
  export default Nav;