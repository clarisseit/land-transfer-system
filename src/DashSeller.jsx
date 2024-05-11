
import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";

import { HiOutlineDocumentReport } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

// import { CiSearch } from "react-icons/ci";

// import { useState } from 'react';

// import { FaRegCalendarAlt } from "react-icons/fa";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TiTick } from "react-icons/ti";

import { Link } from 'react-router-dom';


const Dashboard = () => {


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

                <main className="flex-1 bg-slate-300 ml-[17rem] p-10 w-1/2">

                    <h6 className="text-gray-500">Pages / Sellers</h6>
                    <h2 className="text-2xl  mb-4">Sellers</h2>

                    <div className="bg-white border flex border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ml-[50rem] -mt-[3rem] text-green-500">
                        <input
                            type="text"
                            className="text-black flex gap-7 outline-none bg-transparent"
                            placeholder="Search"
                        />
                        <CiSearch className="mt-[0.3rem]" />
                    </div>



                    <div className=" flex gap-x-20 mt-[2rem]">

                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>
                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>

                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>
                    </div>

                    <div className=" flex gap-x-20 mt-[2rem]">

                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>
                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>

                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>
                    </div>

                    <div className=" flex gap-x-20 mt-[2rem]">

                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>
                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>

                        <span className="bg-white border border-gray-300 gap-12 h-[8rem] w-[18rem] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <p className="flex gap-[3rem] text-blue-900 font-mono text-lg"> Waiting Approved<b><TiTick className="w-8 h-8" /> </b></p>
                            <div className="mt-[2rem] text-xl font-mono"><button className="text-green-500 -ml-2 border-2 rounded-full p-2 border-gray-400">Approved</button><button className="text-red-600 ml-14 border-2 rounded-full p-2 border-gray-400 "> Delete</button></div>
                        </span>
                    </div>








                </main>
            </div >
        </>
    );
}

export default Dashboard;
