import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg";

const bannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "1005",
}
function Subscribe() {
    return (
        <div>
            <div
                data-aos="zoom-im"
                className='bg-gray-100 mb-20 dark:bg-gray-800 text-white'
                style={bannerImg}>
                    <div className="container backdrop-blur-sm py-10">
                        <div className='space-y-6 max-w-xl mx-auto'>
                            <h1 className='text-[20px] text-left md:text-center md:text-2xl font-semibold'>Get Notified About New Products</h1>
                            <input 
                                data-aos="fade-out"
                                type="text" 
                                placeholder='Enter Your Email' 
                                className='w-full p-3 bg-white dark:bg-gray-800 text-black outline-none border-none rounded-[10px] dark:text-white' 
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Subscribe
