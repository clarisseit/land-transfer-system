
import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { useState } from 'react';

import { HiOutlineDocumentReport } from "react-icons/hi";

// import { useState } from 'react';

// import { FaRegCalendarAlt } from "react-icons/fa";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [savedMessage, setSavedMessage] = useState("");

    const handleSaveChanges = () => {
        // Perform saving changes logic here
        // For demonstration purposes, let's just set a message
        setSavedMessage("profile Changed successfully!");
    };


    return (
        <>
            <div className="flex ">
                <aside className="bg-gray-600 w-1/5 h-full  absolute">
                    <div className="flex flex-col ">

                        {/* Sidebar Navigation */}
                        <nav>
                            <img className="w-[10rem] ml-3" src="../src/assets/img/logo.png" alt="" />
                            <ul className="mt-[2rem] text-xl  ">
                                <Link to="/dashboard" >
                                    <li className="mb-4">
                                        <a href="#" className=" text-white hover:text-green-300 flex gap-2 ml-8"><b><HiOutlineDocumentReport className="mt-[0.3rem]" /></b>Dashboard </a>
                                    </li>
                                </Link>
                                <Link to="/dashseller" >

                                    <li className="mb-4">

                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Seller(Abagurishije)</a>
                                    </li>
                                </Link>

                                <Link to="/dashbuyer" >
                                    <li className="mb-4">

                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><LuUsers className="mt-[0.3rem]" /></b> Buyers (Abaguze)</a>
                                    </li>
                                </Link>
                                <Link to="/dashsetting" >
                                    <li className="mb-4">
                                        <a href="#" className="text-white hover:text-green-300 flex gap-2 ml-8"> <b><MdManageHistory className="mt-[0.3rem]" /></b>Settings</a>
                                    </li>
                                </Link>

                                <li className="mt-[20rem] bg-red-300 ">
                                    {/* Analytics with rectangle */}
                                    <div className="rounded-lg bg-white p-2">
                                        <a href="#" className="text-black">Logout</a>
                                    </div>
                                </li>
                                {/* Add more sidebar links as needed */}
                            </ul>
                        </nav>
                    </div>
                </aside >

                <main className="flex-1 bg-slate-300 -ml-[12rem] p-10 w-1/2">
                    <div className="container mx-auto px-14 py-20">
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                                <div className="flex">
                                    <div className="mb-4">
                                        <label htmlFor="firstName" className=" font-semibold gap-[3rem]  mb-1">First Name</label>
                                        <input type="text" id="firstName" className="form-input border-2 border-gray-500 rounded-full " placeholder="Uwizeyimana" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="lastName" className="block font-semibold mb-1">Last Name</label>
                                        <input type="text" id="lastName" className="form-input w-full border-2 border-gray-500 rounded-full" placeholder="Clarisse" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                                    <input type="email" id="email" className="form-input w-full border-2 border-gray-500 rounded-full" placeholder="clarisse21445@gmail.com" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block font-semibold mb-1">Mobile Number</label>
                                    <input type="tel" id="mobile" className="form-input w-full border-2 border-gray-500 rounded-full" placeholder="0781*********" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="block font-semibold mb-1">Residential Address</label>
                                    <input type="text" id="address" className="form-input w-full border-2 border-gray-500 rounded-full" placeholder="Street, Bus stop, House Number" />
                                </div>

                                <button onClick={handleSaveChanges} className="bg-blue-500 text-white ml-[9rem] py-2 px-4 rounded hover:bg-blue-700">Save changes</button>
                            </div>
                        </div>
                    </div>
                </main >
            </div >
            {savedMessage && <p className="text-blue-700 ml-[22rem] text-4xl -mt-[37rem]">{savedMessage}</p>}
        </>
    );
}

export default Dashboard;
