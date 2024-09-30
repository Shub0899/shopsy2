import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import blog1 from "../../assets/News/blog-1-5Dxe4tom.jpg";
import blog2 from "../../assets/News/blog-2-zkQv0kmP.jpg";
import blog3 from "../../assets/News/blog-3-VPuh2Z20.jpg";

const news = [
    {
        date: "Jan 20, 2024 by Dilshad",
        title: "How to choose perfect smartwatch",
        description: "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        image: blog1
    },
    {
        date: "Jan 20, 2024 by Dilshad",
        title: "How to choose perfect smartwatch",
        description: "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        image: blog2
    },
    {
        date: "Jan 20, 2024 by Dilshad",
        title: "How to choose perfect smartwatch",
        description: "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        image: blog3
    }
];

function News() {
    // Initialize AOS when the component is mounted
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='dark:bg-[#111827] w-full flex flex-col justify-center items-center md:px-[100px] px-[40px] py-8'> {/* Removed margin from sides */}
            <div className='title flex flex-col justify-center items-center mb-10'>
                <h1 className='text-3xl font-bold lg:text-4xl text-black dark:text-white'>Recent News</h1>
                <p className='text-xs text-gray-400 mt-3'>Explore Our Blogs</p>
            </div>

            {/* Ensure the news grid is responsive and takes up the full width */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
                {news.map((item, index) => (
                    <div 
                        key={index}
                        data-aos="fade-up" // Animation type
                        data-aos-delay={index * 200} // Delay time for each item
                        className='group rounded-lg shadow-lg overflow-hidden transition-transform duration-300 bg-white dark:bg-gray-800'>
                        
                        {/* Image with scale effect on hover */}
                        <img 
                            src={item.image}
                            alt={item.title}  
                            className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105' 
                        />
                        
                        <div className='p-5'>
                            <div className='text-gray-500 text-xs mb-2'>{item.date}</div>
                            <h2 className='text-lg font-bold text-black dark:text-white mb-2'>{item.title}</h2>
                            <p className='text-sm text-gray-600 dark:text-gray-300'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;