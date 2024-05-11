
import { Link } from 'react-router-dom';
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { LiaFlickr } from "react-icons/lia";


const HomePage = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
            <div className="background-image   inset-0 bg-center bg-cover opacity-50">
                <ul className='flex ml-[63rem] text-2xl  font-bold text-wrap gap-12 text-center  text-blue-800 -mt-[.4rem]'>

                    <li className='mt-4 hover:bg-blue-700  hover:text-white'><a href="#">Home</a></li>
                    <li className='mt-4 hover:bg-blue-700  hover:text-white'><a href="https://www.lands.rw/about/history">About</a></li>
                </ul>
                <img src="../src/assets/img/logo.png" className="w-[48rem] ml-[20rem]  " />
                <marquee className="text-4xl font-bold text-wrap  text-center text-blue-800 -mt-[1rem]" >Welcome to National Land Authority and make transfer of Land Document at your Home</marquee>
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-3xl font-bold mb-8 mt-[3rem] text-center">Choose your Respectively</p>
                <div className="flex gap-12 -mt-8 ">
                    <Link to="/seller" className="text-2xl border-2 bg-blue-500 border-black text-white rounded-lg p-1 text-center mt-8 w-[20rem]">Seller (Uwagurishije) </Link>
                    <Link to="/buyer" className="text-2xl border-2 bg-blue-500 border-black text-white rounded-lg text-center mt-8 w-[20rem]">Buyer (Uwaguze)</Link></div>

            </div>
            <footer className="bg-[#054D6F] w-full mt-12 p-2 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-3xl text-blue-600 font-semibold mb-8 ">Quick Links</h3>
                            <ul className='-mt-[.7rem]'>
                                <li className='mt-4'><a href="https://www.lands.rw/publications/forms">Forms</a></li>
                                <li className='mt-4'><a href="https://www.lands.rw/updates/announcement">Announcements</a></li>
                                <li className='mt-4'><a href="https://www.lands.rw/updates/faqs">FAQs</a></li>
                                <li className='mt-4'><a href="https://landinformation.lands.rw/">Land Information Portal & e-title</a></li>
                                <li className='mt-4'><a href="https://rwandalanddashboard.lands.rw/">Rwanda Land Dashboard</a></li>
                                <li className='mt-4'><a href="https://geodata.rw/portal/home/">NSDI Hub - geodata.rw</a></li>
                                <li className='mt-4'><a href="https://www.lands.rw/online-complaint-form">Online Complaint Form</a></li>
                                <li className='mt-4'><a href="https://mail.lands.rw/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.lands.rw%2fowa">Webmail</a></li>
                                <li className='mt-4'><a href="https://nla.smartadmin.gov.rw/login">Smart Admin</a></li>
                                <li className='mt-4'><a href="https://www.bpmis.gov.rw/">BPMIS</a></li>
                                <li className='mt-4'><a href="https://irembo.gov.rw/">Irembo</a></li>
                                <li className='mt-4'><a href="#">Contact Us</a></li>
                                <li className='mt-4'><a href="https://www.lands.rw/about-us">Land Transfer</a></li>
                            </ul>
                        </div>
                        <div className='-ml-[4rem]'>
                            <h3 className="text-3xl text-blue-600 font-semibold -ml-[3rem] mb-4">Contact Information</h3>
                            <p>2142</p>
                            <p>info@lands.rw</p>
                            <p>kigalizone@lands.rw</p>
                            <p>southernzone@lands.rw</p>
                            <p>westernzone@lands.rw</p>
                            <p>northernzone@lands.rw</p>
                            <p>easternzone@lands.rw</p>

                            <p className='mt-4'>Nyarugenge Pension Plaza</p>
                            <p>P.O Box: 433 Kigali, Rwanda</p>
                            <div className="flex mt-12 gap-4 ">
                                <a className="" href="https://twitter.com/Lands_Rwanda"><CiTwitter className='bg-blue-600 text-white rounded-lg text-center w-[2rem] h-[2rem]' /></a>
                                <a className="" href="https://www.facebook.com/LandsRwanda/?_rdc=1&_rdr"> <SlSocialFacebook className='bg-blue-600 text-white rounded-lg text-center w-[2rem] h-[2rem]' /></a>
                                <a className="" href="https://www.youtube.com/channel/UCspreo0XuFJzUDpMFbn-6xA/videos"> <CiYoutube className='bg-blue-600 text-white rounded-lg text-center w-[2rem] h-[2rem]' /></a>
                                <a className="" href="https://www.flickr.com/photos/138414661@N03/albums/">  <LiaFlickr className='bg-blue-600 text-white rounded-lg text-center w-[2rem] h-[2rem]' /></a>
                            </div>
                        </div>
                        <div>
                            <iframe className='-ml-[10rem] -mt-[.4rem]'
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.315991709247!2d30.072872714762537!3d-1.9513880376173024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca684f2654ef3%3A0xdee8491fd08c91c4!2sNyarugenge%20Pension%20Plaza%20KN%203%20Rd%2C%20Kigali!5e0!3m2!1sen!2srw!4v1621251742464!5m2!1sen!2srw"
                                width="600"
                                height="490"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div >
                </div >
            </footer >

        </div >
    );
};

export default HomePage;
