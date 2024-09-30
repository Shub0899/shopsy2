import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import headphone from "../../assets/Hero/headphone.png";
import vr from "../../assets/Hero/vr-4ibBMPK9.png";
import watch from "../../assets/Hero/watch.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Hero() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // Whether animation should happen only once
        });
    }, []);

    const data = [
        {
            p1: "Beats Solo",
            h2: "Wireless",
            h1: "HEADPHONE",
            img: headphone,

        },
        {
            p1: "Beats Solo",
            h2: "Wireless",
            h1: "VIRTUAL",
            img: vr
        },
        {
            p1: "Beats Solo",
            h2: "Branded",
            h1: "LAPTOP",
            img: watch
        },
    ];

    return (
            <div className='bg-white dark:bg-[#111827] h-full w-full'>
                <div className="md:mx-[100px] mx-[40px] py-[30px] cursor-pointer bg-gray-200 dark:bg-[#111827] dark:bg-gradient-to-l dark:from-gray-100/10 md:bg-gradient-to-l md:from-gray-100 dark:md:bg-[#111827] dark:md:bg-gradient-to-l dark:md:from-gray-100/10 rounded-[30px]">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }} 
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col-reverse lg:flex-row items-center" data-aos="zoom-out-up">
                                    {/* Text Container */}
                                    <div className="text-center lg:text-left md:w-1/2 ml-11">
                                        <p className='text-2xl font-bold dark:text-white'>
                                            {item.p1}
                                        </p>
                                        <br />
                                        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white'>
                                            {item.h2}
                                        </h2>
                                        <br />
                                        <h1 className='text-4xl md:text-7xl lg:text-8xl xl:text-[150px] uppercase text-white dark:text-white/10 font-bold'>
                                            {item.h1}
                                        </h1>
                                        <br />
                                        <button className='rounded-full bg-primary text-white px-9 py-2 transform hover:scale-110 transition duration-300'>
                                            Shop By Category
                                        </button>
                                    </div>

                                    {/* Image Container */}
                                    <div className="md:w-1/2 flex justify-end md:-mt-4">
                                        <img
                                            src={item.img}
                                            className="w-[340px] h-[300px] sm:h-[450px] md:w-[500px] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.2)]"
                                            alt={item.h1}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
    );
}

export default Hero;
