import { ReactNode } from "react"

// define props type
type Props = {
    children : ReactNode
}



function CvLeftSectionHeading({children}:Props){
    return(
        <div className="flex items-center justify-center">
             <h1 className=" mt-4 mb-4 w-fit text-center px-4 py-3 border-cyan-500 rounded-lg shadow-lg shadow-cyan-500 text-gray-200 text-sm font-semibold md:text-2xl
        uppercase ">{children}</h1>
        </div>
    )
}
export default CvLeftSectionHeading