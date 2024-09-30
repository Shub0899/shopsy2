import React from 'react';
import Earphone from "../../assets/Category/earphone-gTSt01f7.png";
import Watches from "../../assets/Category/watch.png";
import Laptop from "../../assets/Category/macbook-MZGIbM5F.png";
import Console from "../../assets/Category/gaming--Uk6eZy1.png";
import Virtual from "../../assets/Category/vr-4ibBMPK9.png";
import Speaker from "../../assets/Category/speaker-X9yW-39F.png";

function Category() {
    const data = [
        {
            p1: "Enjoy",
            h2: "With",
            h1: "Earphone",
            img: Earphone,
            bgColor: "bg-blue-500"
        },
        {
            p1: "Enjoy",
            h2: "With",
            h1: "Watches",
            img: Watches,
            bgColor: "bg-green-500"
        },
        {
            p1: "Enjoy",
            h2: "With",
            h1: "Laptop",
            img: Laptop,
            bgColor: "bg-red-500"
        },
        {
            p1: "Enjoy",
            h2: "With",
            h1: "Console",
            img: Console,
            bgColor: "bg-yellow-500"
        },
        {
            p1: "Enjoy",
            h2: "With",
            h1: "Virtual",
            img: Virtual,
            bgColor: "bg-purple-500"
        },
        {
            p1: "Enjoy",
            h2: "With",
            h1: "Speaker",
            img: Speaker,
            bgColor: "bg-pink-500"
        },
    ];

    return (
        <div className='dark:bg-[#111827] h-full w-full'>
            <div className="md:mx-[100px] mx-[40px] py-[30px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((item, index) => (
                        <div key={index} className={`grid grid-cols-2 gap-10 text-white rounded-3xl ${item.bgColor}`}>
                            <div className='text p-10'>
                                <p className='mb-[2px]'>{item.p1}</p>
                                <h2 className='text-2xl font-semibold mb-[2px]'>{item.h2}</h2>
                                <h1 className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>{item.h1}</h1>
                                <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full mt-3">Browse</button>
                            </div>
                            <div className='flex items-center justify-center z-10'>
                                <img src={item.img} alt={item.h1} className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
