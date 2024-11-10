"use client"
import Image from "next/image"
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footers() {
    return (
        <div className="pt-2 pb-2 bg-black">
            {/* Logo Section */}
            <div className="flex justify-center">
                <Image 
                    src="/images/logo3.png" 
                    alt="logo" 
                    width={180} 
                    height={180} 
                    className="mx-auto" 
                />
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-9 mt-4">
                <div>
                    <a href="https://www.facebook.com/MuhammadSajidSheikh121094/" target="blank">
                        <Image 
                            src="/images/Facebook.png" 
                            alt="facebook" 
                            width={30} 
                            height={50} 
                            className="hover:scale-150 duration-300"
                        />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/muhammad-sajid-sheikh-4530602b5" target="blank">
                        <Image 
                            src="/images/linkedin.png" 
                            alt="linkedin" 
                            width={30} 
                            height={50} 
                            className="hover:scale-150 duration-300"
                        />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/invites/contact/?igsh=ldxk2pn8n2mh&utm_content=shc50sg" target="blank">
                        <Image 
                            src="/images/insta.png" 
                            alt="insta" 
                            width={30} 
                            height={50} 
                            className="hover:scale-150 duration-300"
                        />
                    </a>
                </div>
            </div>

            {/* Footer Text */}
            <div className="flex items-center justify-center text-white text-sm mt-4">
                <div className="flex pr-5 text-center">
                    <p><AiOutlineCopyrightCircle /></p>
                    <p>2024 Sajid Sheikh. All rights reserved. Contact: +92 345 338 0161</p>
                </div>
            </div>
        </div>
    );
}

export default Footers;