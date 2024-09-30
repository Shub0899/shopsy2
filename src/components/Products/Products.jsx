import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import p1 from "../../assets/Product/p-1.jpg";
import p2 from "../../assets/Product/p-2.jpg";
import p3 from "../../assets/Product/p-3.jpg";
import p4 from "../../assets/Product/p-4.jpg";
import p5 from "../../assets/Product/p-5.jpg";
import p7 from "../../assets/Product/p-7.jpg";

function Products() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            once: false, // Whether animation should happen only once while scrolling down
        });
    }, []);

    const data = [
        { name: "Boat Headphone", img: p1, price: "$120" },
        { name: "Boat Headphone", img: p2, price: "$120" },
        { name: "Boat Headphone", img: p3, price: "$120" },
        { name: "Boat Headphone", img: p4, price: "$120" },
        { name: "Boat Headphone", img: p5, price: "$120" },
        { name: "Boat Headphone", img: p7, price: "$120" },
    ];

    return (
        <div className='dark:bg-[#111827] flex flex-col justify-center items-center pb-10 pt-10'>
            <div className='title flex flex-col justify-center items-center mb-10'>
                <h1 className='text-3xl font-bold lg:text-4xl text-black dark:text-white'>Our Products</h1>
                <p className='text-xs text-gray-400 mt-3'>Explore Our Products</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
                {data.map((product, index) => (
                    <div
                        key={index}
                        className='w-[260px] rounded-lg overflow-hidden shadow-lg'
                        data-aos="fade-up" // AOS animation
                        data-aos-delay={`${index * 200}`} // Delay in milliseconds based on the index
                    >
                        {/* Image Container */}
                        <div className='relative group'>
                            <img
                                src={product.img}
                                alt={product.name}
                                className='w-full h-[180px] object-cover transition duration-300 ease-in-out group-hover:blur-sm'
                            />
                            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100'>
                                <button className='mt-2 bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600'>
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Display product name and price outside of the image box */}
                        <div className='mt-2 text-center'>
                            <h3 className='text-lg font-semibold text-black dark:text-white'>{product.name}</h3>
                            <p className='text-sm text-gray-400'>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
