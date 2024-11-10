"use client"

import Sectionheading from "./components/sectionheading"
import React, { useState } from 'react';

// Define the InputField interface
interface InputField {
  id: number;
  label: string;
  value: string;
}

interface WorkExperProps {
  setWorkInfo: (skills: InputField[]) => void; // Function to send data back to the parent component (CV)
}

const WorkExper: React.FC<WorkExperProps> = ({ setWorkInfo }) => {
  // Initial state for skills and institutes
  const [inputs, setInputs] = useState<InputField[]>([
    { id: 1, label: "Company:", value: "" },
    { id: 2, label: "Role:", value: "" },
  ]);

  // Function to handle input changes
  const handleChange = (id: number, value: string) => {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, value } : input
    );
    setInputs(updatedInputs);
    setWorkInfo(updatedInputs); // Send updated data to the parent component (CV)
  };

  // Function to add two new inputs
  const addInputs = () => {
    const newId1 = inputs.length + 1;
    const newId2 = inputs.length + 2;
    const newInputs = [
      ...inputs,
      { id: newId1, label: "Company:", value: "" },
      { id: newId2, label: "Role:", value: "" },
    ];
    setInputs(newInputs);
    setWorkInfo(newInputs); // Send updated data to the parent component (CV)
  };

  return (
    <div className="pt-16 pb-16 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/bgnew.png')" }}>
      <section>
        <Sectionheading>Work Experiece</Sectionheading>
      </section>
      <div className="flex items-center justify-center p-4 ml-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-3/4 max-w-md sm:max-w-lg lg:max-w-2xl">
          {inputs.map((input) => (
            <div key={input.id} className="relative">
              <label className="block text-white font-medium mb-1">{input.label}</label>
              <input
                type="text"
                value={input.value}
                onChange={(e) => handleChange(input.id, e.target.value)} // Update value on change
                placeholder={`Input ${input.id}`}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          {/* Button to add two new inputs */}
          <div className="relative col-span-full flex justify-evenly lg:ml-96">
            <button
              type="button"
              onClick={addInputs}
              className="bg-blue-500 text-white hover:text-blue-700 p-2 mt-2"
            >
              + {/* Plus icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExper;