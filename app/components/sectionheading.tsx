"use client"
import {ReactNode } from "react"

// define props type
type Props = {
    children : ReactNode
}



function Sectionheading({children}:Props){
    return(
        <div>
             <h1 className="bg-gradient-to-t from-[#889b5c] to-[#94C326] w-fit text-center px-4 py-3 mx-auto text-black text-2xl font-semibold sm:text-3xl md:text-4xl
        uppercase ">{children}</h1>
        </div>
    )
}
export default Sectionheading