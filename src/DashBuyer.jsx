
import { LuUsers } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";

import { HiOutlineDocumentReport } from "react-icons/hi";

// import { CiSearch } from "react-icons/ci";

// import { useState } from 'react';

// import { FaRegCalendarAlt } from "react-icons/fa";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

// import { CiSearch } from "react-icons/ci";

// import { useState } from 'react';

// import { FaRegCalendarAlt } from "react-icons/fa";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TiTick } from "react-icons/ti";


const Dashboard = () => {



    // calendar

    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);


    // Barchart section 

    const chart1Ref = useRef(null);
    const chart2Ref = useRef(null);
    const chart3Ref = useRef(null);
    const chart1InstanceRef = useRef(null);
    const chart2InstanceRef = useRef(null);
    const chart3InstanceRef = useRef(null);

    useEffect(() => {
        // Function to create and update Chart.js instance
        const createOrUpdateChart = (chartRef, chartType, chartData, chartOptions) => {
            if (chartRef && chartRef.current) {
                // Destroy any existing chart instance
                if (chartRef.current.chart) {
                    chartRef.current.chart.destroy();
                }

                const ctx = chartRef.current.getContext('2d');

                // Create new chart instance
                return new Chart(ctx, {
                    type: chartType,
                    data: chartData,
                    options: chartOptions
                });
            }
        };

        // Create or update first chart (bar chart)
        chart1InstanceRef.current = createOrUpdateChart(
            chart1Ref,
            'bar',
            {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Bar Chart',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        );

        // Create or update second chart (line chart)
        chart2InstanceRef.current = createOrUpdateChart(
            chart2Ref,
            'line',
            {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Line Chart',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        );

        // Create or update third chart (doughnut chart)
        chart3InstanceRef.current = createOrUpdateChart(
            chart3Ref,
            'doughnut',
            {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [{
                    label: 'Doughnut Chart',
                    data: [300, 50, 100],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            },
            {}
        );

        // Cleanup function
        return () => {
            // Destroy chart instances when the component unmounts
            if (chart1InstanceRef.current) {
                chart1InstanceRef.current.destroy();
            }
            if (chart2InstanceRef.current) {
                chart2InstanceRef.current.destroy();
            }
            if (chart3InstanceRef.current) {
                chart3InstanceRef.current.destroy();
            }
        };
    }, []);

    return (
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

                <h6 className="text-gray-500">Pages / Buyers</h6>
                <h2 className="text-2xl  mb-4">Buyers</h2>

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
    );
}

export default Dashboard;