import { ReactNode } from "react"

// define props type
type Props = {
    children : ReactNode
}



function CvRightSectionHeading({children}:Props){
    return(
        <div>
             <h1 className="bg-slate-100 mt-4 mb-4 w-fit text-center px-4 py-3 border- rounded-lg shadow-sm shadow-pink-400 text-black text-sm font-semibold md:text-3xl
        uppercase ">{children}</h1>
        </div>
    )
}
export default CvRightSectionHeading