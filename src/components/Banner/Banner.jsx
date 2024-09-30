import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Headphone from "../../assets/Hero/headphone.png";

function Banner() {
    useEffect(() => {
        aos.init({
            offset: 120, // offset (in px) from the original trigger point
            duration: 600, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: false, 
        }); // Initialize AOS
    }, []);

    return (
        <div className='dark:bg-[#111827]'>
            <div className=''>
                <div className='flex lg:flex-row flex-col bg-primary rounded-3xl md:justify-between justify-start sm:items-start md:items-center md:mx-[100px] mx-[40px] md:py-[70px] py-[30px] px-[20px] gap-10' data-aos="fade-up">
                     
                    {/* Left Text Div with AOS Fade-up */} 
                    <div className='text sm:mx-10 sm:mx-4' data-aos="fade-up">
                        <p className='text-white text-sm sm:text-base'>30% OFF</p>
                        <h1 className='uppercase text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>Fine smile</h1>
                        <p className='text-white text-sm sm:text-base'>10 jan to 28 jan</p>
                    </div>

                    {/* Image with AOS Zoom-in */}
                    <div className='h-full flex items-center' data-aos="zoom-in-up"  data-aos-delay="600">
                        <img src={Headphone} alt="Headphone" className="scale-125 w-[250px] md:w-[340px] sm:mx-[30px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover" />
                    </div>

                    {/* Right Text Div with AOS Fade-up */}
                    <div className='text z-10 mx-4 sm:mx-10' data-aos="fade-up" >
                        <p className='text-white text-sm sm:text-base py-3'>30% OFF</p>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold py-5 text-white'>Winter sale</h1>
                        <p className='text-white max-w-72 text-sm sm:text-base py-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis.
                        </p>
                        <button className='bg-white text-primary cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full mt-3'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
