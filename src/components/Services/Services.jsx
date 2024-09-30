import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

function Services() {
    const data = [
        {
            h1: "Free Shipping",
            p: "Free Shipping On All Orders",
            icon: MdLocalShipping
        },
        {
            h1: "Safe Money",
            p: "30 Days Money Back",
            icon: IoIosCheckmarkCircle
        },
        {
            h1: "Secure Payment",
            p: "All Payment Secure",
            icon: MdOutlinePayment
        },
        {
            h1: "Online Support 24/7",
            p: "Technical Support 24/7",
            icon: MdSupportAgent
        },
    ];

    return (
        <div className='dark:bg-[#111827] py-[30px]'>
            <div className="flex flex-wrap justify-center md:mx-[100px] mx-[40px] gap-10">
                {data.map((item, index) => (
                    <div key={index} className='flex items-center space-x-4 p-4'>
                        <div className='icon text-primary'>
                            <item.icon className="text-4xl md:text-5xl text-primary" />
                        </div>
                        <div className='text'>
                            <h1 className='lg:text-xl font-bold text-black dark:text-white'>{item.h1}</h1>
                            <p className='text-black-400 text-sm dark:text-gray-300'>{item.p}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
