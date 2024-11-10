import Sectionheading from "./components/sectionheading"






import React, { useState } from 'react';

const InfoSection: React.FC<{ setPersonalInfo: (info: any) => void }> = ({ setPersonalInfo }) => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        phone: '',
        email: '',
        cnic: ''
    });

    // Handle form input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const updatedData = { ...prevState, [name]: value };
            setPersonalInfo(updatedData); // Update parent component state
            return updatedData;
        });
    };

    return (
        <div className="pt-16 pb-16 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/bgnew.png')" }}>
            <section id="info" className="pb-12">
               <Sectionheading>Information Section</Sectionheading>
            </section>

            <div className="flex items-center justify-center p-4 ml-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-3/4 max-w-md sm:max-w-lg lg:max-w-2xl">
                    <div>
                        <label className="block text-white font-medium mb-1">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-1">Father's Name:</label>
                        <input
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-1">Phone No:</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-1">CNIC No:</label>
                        <input
                            type="text"
                            name="cnic"
                            value={formData.cnic}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;