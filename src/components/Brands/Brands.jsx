import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Brand1 from "../../assets/Brands/download (1).png";
import Brand2 from "../../assets/Brands/download (2).png";
import Brand3 from "../../assets/Brands/download (3).png";
import Brand4 from "../../assets/Brands/download (4).png";
import Brand5 from "../../assets/Brands/download.png";


function Brands() {
  // Initialize AOS with `once` set to false
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Repeat animation each time it enters the viewport
    });
  }, []);

  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5];

  return (
    <div className='dark:bg-gray-900 py-20'>
      <div className='py-8 hidden md:flex justify-center gap-28 bg-gray-200 dark:bg-gray-900 px-10' data-aos="zoom-out">
        {/* Loop over the brands array and display each logo with animation */}
        {brands.map((brand, index) => (
          <div
            key={index}
            className='w-[80px] dark:text-white flex justify-center items-center'
            data-aos-anchor-placement="top-bottom"  // Set anchor placement to trigger animation
            data-aos-once="false" // Ensure animation triggers every time it enters the viewport
          >
            <img src={brand} alt={`Brand ${index + 1}`} className='w-full dark:invert' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
