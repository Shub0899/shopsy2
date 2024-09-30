import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <hr />
            <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 px-10">
                  {/* Company Section */} 
                    <div>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>ESHOP</a>
                        <p className='text-gray-600 dark:text-white/70  lg:pr-24 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
                        <p className='text-gray-500 mt-4'>Made with 💖 by The Coding Journey</p>
                        <a href="#" className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit our YouTube Channel</a>
                    </div>
                    {/* Help Center Section */}
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-xl font-bold sm:text-left mb-3 dark:text-white">Important Links</h2>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>Home</a>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>About</a>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>Contact</a>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>Blog</a>

                    </div>
                    {/* Legal Section */}
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-xl font-bold sm:text-left mb-3 dark:text-white">Quick Links</h2>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>Home</a>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>About</a>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>Contact</a>
                        <a href="#" className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>Blog</a>
                    </div>
                    {/* Download Section */}
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-xl font-bold sm:text-left mb-3 dark:text-white">Address</h2>
                        <div className='flex gap-4 items-center text-gray-600 dark:text-gray-400'><FaLocationArrow /> Noida , Uttar Pradesh </div>
                        <div className='flex gap-4 items-center text-gray-600 dark:text-gray-400 cursor-pointer'><FaInstagramSquare size={24} className='hover:text-primary' /> <FaFacebookSquare size={24} className='hover:text-primary' /> <FaLinkedin size={24} className='hover:text-primary' />  </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
