import CvLeftSectionHeading from "./components/cvLeftsideSection"
import CvRightSectionHeading from "./components/cvRightSectionHeading"
import React from 'react';

// Define the InputField interface
interface InputFieldskill {
  id: number;
  label: string;
  value: string;
}

interface InputFieldwork {
  id: number;
  label: string;
  value: string;
}

interface CVProps {
  skillsInfo: InputFieldskill[]; // Accept skillsInfo as a prop
  workInfo: InputFieldwork[]
  certificationInfo: InputField[]; // Add certificationInfo as a prop
}





// Define the InputField interface
interface InputField {
  id: number;
  label: string;
  value: string;
}


interface CVProps {
  imageSrc: string | null;
  personalInfo: {
      name: string;
      fatherName: string;
      phone: string;
      email: string;
      cnic: string;
  };
  educationInfo: InputField[]; // Add educationInfo as a pro
}

const CV: React.FC<CVProps> = ({ imageSrc, personalInfo, educationInfo, skillsInfo, workInfo, certificationInfo }) => {
    return(

        <div className="flex items-center justify-center min-h-screen p-4" style={{backgroundImage: "url('/images/bgnew.png')"}}>
        {/* A4 Container */}
        <div id="cv-container" className="bg-white w-full max-w-[210mm] min-h-[297mm] md:border rounded-lg shadow-lg overflow-hidden md:flex">
          
          {/* Left Side Section */}
          <div className="bg-[#411d1d] text-white p-6 md:p-20 w-full md:w-[45%] text-center border-b-4 md:border-b-0 md:border-r-4 border-cyan-500">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mt-4 md:mt-[10%] mb-6 md:mb-[20%] border rounded-lg border-cyan-500 shadow-lg shadow-cyan-500">
              {/* Image Placeholder */}
              {imageSrc ? (
                            <img src={imageSrc} alt="Uploaded Image" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <div className="text-center text-gray-500">Image Placeholder</div>
                        )}
           
            </div>
            <div>
              <CvLeftSectionHeading>Career Objective</CvLeftSectionHeading>
            </div>
            <section>
              <p className="text-xl">
                To leverage my skills and experience in a dynamic and growth-oriented environment, aiming to contribute effectively to the organization success while continuously improving my professional abilities.
              </p>
            </section>


            <div>
              <CvLeftSectionHeading>Certification</CvLeftSectionHeading>
            </div>
            <section id="certification_section" className="space-y-2 md:space-y-4 text-xl ">
            {certificationInfo.map((cert) => (
              <p key={cert.id}>
                {cert.label}: <span>{cert.value}</span>
              </p>
            ))}
          </section>
           
            <section>
              <p>
                <span></span>
                <br />
                <span></span>
              </p>
            </section>
          </div>
  
          {/* Right Side Section */}
          <div className="p-6 md:p-8 w-full">
            <div className="bg-gray-600 border rounded-lg shadow-lg text-white flex items-center justify-center p-4 md:p-6 mb-4">
              <h1 className="text-2xl md:text-4xl">Curriculum Vitae</h1>
            </div>
            <div>
              <div>
                <CvRightSectionHeading>Personal Information</CvRightSectionHeading>
              </div>
                       <section id="personal_info" className="space-y-2 md:space-y-4 text-xl">
                            <p>Name: <span>{personalInfo.name}</span></p>
                            <p>Father Name: <span>{personalInfo.fatherName}</span></p>
                            <p>Phone No: <span>{personalInfo.phone}</span></p>
                            <p>Email: <span>{personalInfo.email}</span></p>
                            <p>CNIC No: <span>{personalInfo.cnic}</span></p>
                        </section>
              <div>
                <CvRightSectionHeading>Education</CvRightSectionHeading>
              </div>
              <section id="education_section" className="space-y-2 md:space-y-4 text-xl ">
                {educationInfo.map((input) => (
                  <p key={input.id}>
                    {input.label}: <span>{input.value}</span>
                  </p>
                ))}
              </section>
              <div>
                <CvRightSectionHeading>Skills</CvRightSectionHeading>
              </div>
              <section id="skill_section"  className="space-y-2 md:space-y-4 text-xl ">
                {skillsInfo.map((input) => (
                <p key={input.id}>
                {input.label} <span>{input.value}</span>
                </p>
                ))}
              </section>
              <div>
                <CvRightSectionHeading>Work Experience</CvRightSectionHeading>
              </div>
              <section id="Work_exper"  className="space-y-2 md:space-y-4 text-xl">
                {workInfo.map((input) => (
                <p key={input.id}>
                {input.label} <span>{input.value}</span>
                </p>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
    

export default CV