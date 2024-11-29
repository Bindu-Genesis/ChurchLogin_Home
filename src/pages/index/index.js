import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import * as Icon from 'react-feather';
import marketing from '../../assets/images/marketing.png';
import feature from '../../assets/images/feature.png';
import { marketingContact } from '../../data/dataFour';

import BannerImage from '../../assets/images/saas/light-dash.png'
import About1 from '../../assets/images/saas/1.png'
import About2 from '../../assets/images/saas/2.png'
import client1 from '../../assets/images/client/01.jpg'
import client2 from '../../assets/images/client/02.jpg'
import client3 from '../../assets/images/client/03.jpg'
import client4 from '../../assets/images/client/04.jpg'
import client5 from '../../assets/images/client/05.jpg'
import client6 from '../../assets/images/client/06.jpg'
import client7 from '../../assets/images/client/07.jpg'
import client8 from '../../assets/images/client/08.jpg'

import { TypeAnimation } from 'react-type-animation';

import Navbar from '../../component/Navbar/navbarCoc';
import Footer from '../../component/Footer/footer';
import CompanyLogo from '../../component/companyLogo';
import MobileApp from '../../component/mobileApp';
import CookieModal from '../../component/cookieModal';
import UserFeedBack from '../../component/userFeedBack';
import PricingOne from '../../component/pricingOne';
import GetInTuch from '../../component/getInTuch';
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import FAQSection from '../../component/FAQSection';
export default function IndexAi(){
   

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark');
        htmlTag.classList.remove('light')

    });
    return(
        <>
         <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
        <span className="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-red-600/20"></span>
        <Navbar/>
          <section id="home" className="relative table w-full lg:py-28 md:py-20 pt-28 pb-20 overflow-hidden bg-white dark:bg-slate-900">
            <div className="absolute  inset-0 bg-[url('../../assets/images/overlay.png')] bg-repeat opacity-10 dark:opacity-60"></div>
            <div className="container relative z-1">
                <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-2 ">
                    <div className="lg:col-span-7 lg:-mt-24 md:pt-20 lg:pt-0">
                        <div className="lg:me-6 lg:text-start text-center">
                            <h1 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-5xl mb-5">Effective Software <br/>For 
                            <TypeAnimation
                            sequence={[
                                ' Church Management',
                                2000,
                                ' Giving & Donation',
                                2000,
                                ' Event Management',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
                            repeat={Infinity}
                        />
                        </h1>
                            <p className="text-lg max-w-xl lg:ms-0 mx-auto">Church Login is a comprehensive software designed to streamline church administration, integrating membership management, event planning, financial tracking, and communication tools. It enables churches to focus on their mission while efficiently managing operations.</p>
                        
                            <div className="subcribe-form mt-6 mb-3">
                                <form className="relative max-w-md mx-auto lg:ms-0">
                                    <div className="relative">
                                        <FaRegEnvelope  className="me-2 text-base  absolute top-4 left-5"/>
                                        <input type="email" id="aiemail" name="email" className="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="support@churchlogin.com"/>
                                    </div>
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-md">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:size-[36rem] after:border-2 after:border-dashed after:border-slate-200 dark:after:border-slate-700 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-200 dark:before:border-slate-700 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
                            <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-40 after:size-[36rem] after:bg-gradient-to-tl after:to-indigo-600/30  after:from-red-600/30 dark:after:to-indigo-600/50 dark:after:from-red-600/50 after: after:blur-[200px] after:rounded-full after:-z-1">
                                <img src={BannerImage} className="lg:max-w-none lg:ms-14" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        <section className="pt-6">
            <div className="container relative">
                {/* <CompanyLogo/> */}
            </div>
        </section>
        <h3 className=" pt-2 text-center md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"> Why Choose Church Login?</h3>
       
        <section className="relative md:py-14 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-3 grid-cols-1 shadow shadow-gray-300 dark:shadow-gray-500 rounded-lg md:divide-x-[1px] divide-y-[1px] divide-gray-200 dark:divide-gray-700">
                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-monitor-cellphone-star bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">User-friendly interface</h5>

                        <p className="text-slate-400">Church Login's user-friendly interface ensures easy navigation and effortless task management for all users.</p>

                        <MdKeyboardArrowRight className="size-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"/>
                    </div>

                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-shield-lock bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>

                        <h5 className="text-xl font-semibold my-5">Secure and scalable platform</h5>

                        <p className="text-slate-400">Church Login provides a secure and scalable platform, ensuring data protection and seamless growth for your church's needs.</p>

                        <MdKeyboardArrowRight className="size-8 p-1 bg-indigo-600 text-white rounded-full flex justify-center items-center absolute md:top-2/4 md:-translate-y-2/4 -bottom-4 md:-end-0 end-2/4 ltr:translate-x-2/4 rtl:-translate-x-2/4 rtl:rotate-180 z-1"/>
                    </div>

                    <div className="relative p-6 md:p-8">
                        <i className="mdi mdi-church bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text text-[45px]"></i>
                        <h5 className="text-xl font-semibold my-5">Features tailored to your church</h5>
                        <p className="text-slate-400">Church Login offers customizable features to adapt perfectly to your church's unique requirements.</p>
                    </div>
                </div>
            </div>

            <div id="overview" className="container relative md:mt-24 mt-16"   >
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:ps-12 ps-8 lg:pt-12 pt-8 lg:me-8">
                        <img src={About1} className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt=""/>
                    </div>
                    <div >
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">A Powerful and Intuitive Church Dashboard at Your Fingertips</h3>
                        <p className="text-slate-400 max-w-xl">Get a real-time overview of your church’s performance with a dynamic dashboard. From tracking donations and member activities to monitoring event progress and announcements, the dashboard offers a centralized interface for complete administrative control.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Empowering Churches Through Automation</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Simplifying Church Contributions</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Advanced Features for Church and Diocese Administration</li>
                        </ul>

                        <div className="mt-4">
                        {/* about page link here - page-aboutus.html */}
                            <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className='ms-1 text-lg'/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative order-1 md:order-2">
                        <div className="relative overflow-hidden rounded-lg border border-indigo-600/40 bg-indigo-600/10 dark:bg-indigo-600/20 lg:pe-12 pe-8 lg:pt-12 pt-8 lg:ms-8">
                            <img src={About2} className="ltr:rounded-tr-lg rtl:rounded-tl-lg" alt=""/>
                        </div>
                    </div>
                    <div className="order-2 md:order-1">
                        <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Empowering Churches<br/> Through Automation</h4>
                        <p className="text-slate-400">Church Login offers a state-of-the-art platform to simplify church operations. Discover how our solution can transform your church’s daily activities, improve communication, and foster stronger community connections.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Streamlined Tools for Church Members
                            </li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" />Hassle-Free Online Access to Services</li>
                            <li className="mb-1 flex items-center ms-0"><BsCheckCircle className="text-indigo-600 text-base me-2" /> Comprehensive Tracking &  Report Tools</li>
                        </ul>
                        <div className="mt-4">
                            <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className='ms-1 text-lg'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        <div id="features"> </div>
            <div  className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                    <div className="lg:col-span-8 md:col-span-12">
                        <div className="grid grid-cols-1 pb-8">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Robust Features Tailored for Your Church</h3>
                            <p className="text-slate-400 max-w-xl">Discover how Church Login’s features can revolutionize church administration: </p>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-account-group-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
        
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Membership Management</Link>
                                    <p className="text-slate-400 mt-3">Maintain detailed profiles for church members, volunteers, and visitors</p>
                                    <div className="mt-5">
                                         {/* services page link here - page-services.html */}
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-hand-coin-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Payments and Donations</Link>
                                    <p className="text-slate-400 mt-3">Secure online payment gateway for membership fees and donations</p>
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-home-variant-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Cottage Visit Requests</Link>
                                    <p className="text-slate-400 mt-3">Members can submit online requests for cottage visits. Pastors and committees can schedule and communicate the visit dates efficiently</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-calendar-text text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Event Coordination</Link>
                                    <p className="text-slate-400 mt-3">Plan, schedule, and communicate events with dedicated tools.Manage resources, facilities, and registrations seamlessly</p>
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-human-greeting-proximity text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Communication Tools</Link>
                                    <p className="text-slate-400 mt-3">Trigger announcements and alerts for events,updates, and emergencies.Welcome new members with automated messages.</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-card-account-details text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Roll Management</Link>
                                    <p className="text-slate-400 mt-3">Generate and maintain membership and electoral rolls with precision.</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-12">
                        <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-coffin text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Grievance Management</Link>
                                    <p className="text-slate-400 mt-3">Enable members to file complaints or grievances online, with tracking mechanisms for resolution by church elders</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-handshake-outline text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Volunteer and Visitor Management</Link>
                                    <p className="text-slate-400 mt-3">Keep accurate records of volunteers and visitors, ensuring a personalized and welcoming church experience</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                                <span className="mdi mdi-warehouse text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"></span>
                                <div className="content mt-7">
                                    <Link to="/" className="title h5 text-lg font-medium hover:text-indigo-600">Inventory and Vendor Management</Link>
                                    <p className="text-slate-400 mt-3">Track church inventory, including equipment and consumables, across multiple locations.</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More  <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
             <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>
               <section className="relative md:pb-16 pb-16 md:pt-40 pt-32">
                <div className="container relative">
                    <div className="md:flex justify-center">
                        <div className="lg:w-3/4 md:w-full relative -mt-16">
                            <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                                <div className="md:flex justify-center">
                                    <div className="md:w-1/3">
                                        <div className="text-center">
                                            <h6 className="text-slate-400 mb-0">Church Network</h6>
                                            <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={0} end={3000} />+</h2>
                                        </div>
                                    </div>

                                    <div className="md:w-1/3 mt-8 md:mt-0">
                                        <div className="text-center">
                                            <h6 className="text-slate-400 mb-0">Active Monthly Users</h6>
                                            <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={0} end={11000} />+</h2>
                                        </div>
                                    </div>

                                    <div className="md:w-1/3 mt-8 md:mt-0">
                                        <div className="text-center">
                                            <h6 className="text-slate-400 mb-0">Software Addons</h6>
                                            <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" start={0} end={18} />+</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="pricing"> </div>

            <div className="container relative md:mt-24 mt-10">
                    <PricingOne/>
                </div>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Our FAQ section provides quick answers about Church Login, covering setup, features, customization, and security. Find everything you need to make the most of our software. For more help, our support team is ready to assist!</p>

                        <Link to="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">Contact Us</Link>
                    </div>

                    <div className="lg:col-span-8 md:mt-0 mt-8" id="accordion-collapse">
                    <FAQSection />

                            
                    </div>
                </div>
            </div>

            {/* <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Our Pricing Plans</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                </div>

                <div className="grid grid-cols-1 mt-8 gap-[30px]">
                    {priceData.map((item, index)=>{
                        return(
                            <div className="group md:flex items-center justify-between p-6 rounded-lg shadow dark:shadow-gray-700" key={index}>
                                <div className="lg:flex items-center justify-between lg:w-2/4">
                                    <div className="lg:mb-0 mb-5">
                                        <h5 className="text-2xl font-semibold">{item.title}</h5>
                                        <p className="text-slate-400 lg:w-[200px] md:w-[300px] mt-2">{item.desc}</p>
                                    </div>
            
                                    <ul className="list-none text-slate-400 md:mb-0 mb-5">
                                        {item.features.map((el,index)=>{
                                            return(
                                                <li key={index} className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" /> {el}</li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="flex md:mb-0 mb-5">
                                    <span className="text-xl font-semibold">$</span>
                                    <span className="price text-4xl font-semibold mb-0">{item.plan}</span>
                                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                </div>

                                <Link to="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">{item.btn}</Link>
                            </div>
                        )
                    })}
                </div>
            </div> */}
            
 <div  id="contact" ></div>
           <div   className="container relative md:mt-36 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-start md:gap-[30px]">
                    <div className="lg:col-span-4 md:mb-0 mb-8 align-top">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Contact Us</h3>
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We’re Here to Help</h3>

                        <p className="text-slate-400 max-w-xl mx-auto mb-6">Have questions? Want a demo? Reach out to us for more details or support.</p>

                    </div>
                    <div className="lg:col-span-8 md:mt-0 mt-8" id="accordion-collapse">
                       
                    <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                    {/* <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3> */}

                                    <form>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                                                        <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                                                        <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.Book className="size-4 absolute top-3 start-4"></Icon.Book>
                                                        <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="text-start">
                                                    <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.MessageCircle className="size-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                        <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <MobileApp/> */}
         
        </section>
          <Footer/>
          {/* <CookieModal/> */}
        </>
    )
}