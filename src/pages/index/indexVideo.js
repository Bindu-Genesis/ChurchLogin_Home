import React from 'react'
import { Link } from 'react-router-dom';

import bg from '../../assets/images/video/bg.png';
import VideoNavbar from '../../component/Navbar/videoNavbar';
import { FaArrowRight } from 'react-icons/fa';

export default function IndexVideo() {
    return (
        <>
            <VideoNavbar/>
            <section className="relative h-screen flex items-center">
                <div className="absolute top-0 start-0 size-full z-0 pointer-events-none overflow-hidden">
                    <iframe title='google' src="https://www.youtube.com/embed/gJpXlRkW6Fw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
                </div>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <img src={bg} alt="" />
                    </div>
                </div>

                <div className="container-fluid relative">
                    <div className="fixed bottom-0 start-0 end-0 pb-8">
                        <div className="container relative">
                            <div className="grid grid-cols-1">
                                <div className="block">
                                    <div className="flex justify-between">
                                        <h5 className="text-white text-xl font-semibold">Videos for Ads</h5>
                                        <Link to="/video-portfolio" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-white hover:text-white after:bg-white duration-500 ease-in-out">See Videos <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
