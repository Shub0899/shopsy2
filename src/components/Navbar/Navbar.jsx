import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

function Navbar() {
    const [dark, setDark] = useState(false);
    const [down, setDown] = useState(false); 
    const [timeoutId, setTimeoutId] = useState(null); // Store timeout ID

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDark(!dark);
    };

    // Apply the dark mode class to the root html element
    useEffect(() => {
        const rootElement = document.documentElement;
        if (dark) {
            rootElement.classList.add('dark');
        } else {
            rootElement.classList.remove('dark');
        }
    }, [dark]);

    // Handle mouse enter on services
    const handleMouseEnter = () => {
        clearTimeout(timeoutId); // Clear any existing timeout
        setDown(true); // Show dropdown
    };

    // Handle mouse leave on services
    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setDown(false); // Hide dropdown after delay
        }, 100); // Delay in milliseconds
        setTimeoutId(id); // Save timeout ID
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 py-8 px-10 sm:px-[100px]">
                <div className="max-w-screen-xl flex justify-between items-center mx-auto">
                    {/* Logo */}
                    <a href="#" className="text-primary font-semibold text-3xl">
                        ESHOP
                    </a>

                    {/* Navigation Links */}
                    <ul className="space-x-8 text-sm font-medium hidden md:flex ml-5">
                        <li>
                            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-500 dark:hover:text-white">
                                About
                            </a>
                        </li>
                        <li
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-500 dark:hover:text-white flex flex-row justify-center items-center">
                                Services {down ? <BiUpArrow className='ml-3 mt-1' /> : <BiDownArrow className='ml-3 mt-1' />}
                            </a>
                            {down && (
                                <div className="absolute bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-lg transition-all duration-300 ease-in-out transform translate-y-2 opacity-100">
                                    <ul className="p-2">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:rounded-lg hover:bg-primary/30 dark:hover:bg-gray-700">Service 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-gray-800 dark:text-white hover:rounded-lg hover:bg-primary/30 dark:hover:bg-gray-700">Service 2</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>

                    <div className="hidden relative lg:block hover:text-primary cursor-pointer">
                        <div className="hidden lg:flex absolute inset-y-0 left-[150px] items-center pl-3 dark:text-white text-3xl">
                            <IoIosSearch />
                        </div>
                        <input
                            type="text"
                            className="block rounded-full w-full p-2 pl-10 text-sm hover:border dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                        />
                    </div>

                    <div className='flex sm:gap-8 gap-3'>
                        <div className='text-black flex justify-center items-center cursor-pointer dark:text-white text-3xl'>
                            <IoCart />
                        </div>

                        {/* Dark Mode Toggle */}
                        <div
                            className='flex justify-center items-center cursor-pointer dark:text-white text-3xl'
                            onClick={toggleDarkMode}
                        >
                            {dark ? <MdOutlineLightMode /> : <MdDarkMode/>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
