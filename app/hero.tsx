"use client"

import Image from "next/image"
import image2 from "../public/images/image2.png"


import React, { useState } from 'react';

const Hero: React.FC<{ setImageSrc: (src: string | null) => void }> = ({ setImageSrc }) => {
    const [imageSrc, setLocalImageSrc] = useState<string | null>(null);

    // Handle file selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const src = reader.result as string; // Type cast to string (base64 URL)
                setLocalImageSrc(src); // Set the image locally in Hero
                setImageSrc(src); // Pass the image URL to parent
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    // Trigger file input when button is clicked
    const triggerFileInput = () => {
        const fileInput = document.getElementById('imageInput') as HTMLInputElement;
        fileInput.click();
    };

    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-auto bg-no-repeat bg-cover overflow-hidden relative" style={{ backgroundImage: "url('/images/bgnew.png')" }}>
            <div className="flex items-center justify-center">
                <p className="text-gray-300 text-xl sm:text-3xl font-semibold p-6 text-center">
                    Create your professional resume in just a few clicks – building a resume has never been this easy!
                </p>
            </div>

            <div className="flex items-center justify-center mt-10">
                <button
                    onClick={triggerFileInput}
                    className="bg-gradient-to-r from-[#4FB6D8] to-[#06536C] text-black w-[160px] h-[40px] text-base md:w-[262px] md:h-[55px] md:text-2xl border border-gray-900 rounded-full md:rounded-[41px] font-bold"
                >
                    Insert Image
                </button>
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageInput"
            />
        </div>
    );
};

export default Hero;