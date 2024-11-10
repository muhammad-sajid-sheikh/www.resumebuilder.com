"use client"

import InfoSection from "./infoSection";
import Hero from "./hero";
import EducationSection from "./educationSection";
import SkillSection from "./skillSection";
import CertificationSection from "./certificationSection";
import CV from "./cv";
import PDFButton from "./components/pdfbutton";
import React, { useState } from 'react';
import WorkExper from "./workExperience";



// Define the InputField interface
interface InputField {
  id: number;
  label: string;
  value: string;
}

// Define the InputField interface for skills
interface InputFieldskill {
  id: number;
  label: string;
  value: string;
}

// Define the InputField interface for skills
interface InputFieldwork {
  id: number;
  label: string;
  value: string;
}

interface InputFieldcert {
  id: number;
  label: string;
  value: string;
}

const HomePage: React.FC = () => {
  // State to store the image source (URL or null if no image selected)
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // State to store personal information
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    fatherName: '',
    phone: '',
    email: '',
    cnic: ''
});

// State to store education information
const [educationInfo, setEducationInfo] = useState<InputField[]>([
  { id: 1, label: "Higher Education", value: "" },
  { id: 2, label: "School/College", value: "" },
]);

const [skillsInfo, setSkillsInfo] = useState<InputFieldskill[]>([
  { id: 1, label: "Skill:", value: "" },
  { id: 2, label: "Institute:", value: "" },
]);


const [workInfo, setWorkInfo] = useState<InputFieldwork[]>([
  { id: 1, label: "Skill:", value: "" },
  { id: 2, label: "Institute:", value: "" },
]);

const [certificationInfo, setCertificationInfo] = useState<InputFieldcert[]>([
  { id: 1, label: 'Certification', value: "" },
  { id: 2, label: 'Institution', value: "" }
]);

  return (
    <div >
      <Hero setImageSrc={setImageSrc}/>
      <InfoSection setPersonalInfo={setPersonalInfo}/>
      <EducationSection setEducationInfo={setEducationInfo}/>
      <SkillSection setSkillInfo={setSkillsInfo}/>
      <WorkExper setWorkInfo={setWorkInfo}/>
      <CertificationSection setCertificationInfo={setCertificationInfo}/>
      <CV imageSrc={imageSrc} personalInfo={personalInfo} educationInfo={educationInfo} skillsInfo={skillsInfo} workInfo={workInfo} certificationInfo={certificationInfo}/>
      <PDFButton targetElementId="cv-container"/>
    </div>
  )
}
export default HomePage