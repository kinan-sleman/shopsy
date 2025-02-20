import React from 'react'
import BannerImg from "../../assets/women/women2.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const DetailsData = [
    {
        id: 1,
        icon: <GrSecure className='w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />,
        title: "Quality Products"
    },
    {
        id: 2,
        icon: <IoFastFood className='w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />,
        title: "Fast Delivery"
    },
    {
        id: 3,
        icon: <GiFoodTruck className='w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />,
        title: "Easy Payment Method"
    },
    {
        id: 4,
        icon: <GiFoodTruck className='w-12 h-12 text-4xl shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />,
        title: "Get Offers"
    },
]
function Banner() {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-4 md:py-12 mb-3 md:mb-0'>
            <div className="container">
                <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center">
                    {/* Image Section */}
                    <div data-aos="zoom-in">
                        <img className='md:max-w-[400px] h-[350px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' src={BannerImg} alt="" />
                    </div>
                    {/* Text Details Section */}
                    <div className='flex flex-col justify-center gap-6 pt-0 '>
                        <h1 data-aos="fade-up" className="font-bold text-4xl md:text-4xl">Winter Sale Upto 50% off</h1>
                        <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi nesciunt ab omnis rerum commodi cupiditate consequatur, mollitia ex adipisci inventore dolorem eveniet totam porro corrupti pariatur itaque, aut aliquid.</p>
                        <div className="flex flex-col gap-6">
                            {DetailsData?.map(({ id, title, icon }) => (
                                <div key={id} data-aos="fade-up" className="flex items-center gap-12">
                                    {icon}
                                    <span>{title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
