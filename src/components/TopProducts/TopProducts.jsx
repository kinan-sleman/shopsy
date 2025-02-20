import React from 'react'
import img1 from "../../assets/shirt/shirt.png";
import img2 from "../../assets/shirt/shirt2.png";
import img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa6';
const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Casual Wear",
        aosDelay: "0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio amet quis minima explicabo cupiditate ducimus tempore quod earum ea consequatur ex harum illum placeat dignissimos ab. Commodi, consequuntur quis?",
    },
    {
        id: 2,
        img: img2,
        title: "Printed Shirt",
        aosDelay: "400",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio amet quis minima explicabo cupiditate ducimus tempore quod earum ea consequatur ex harum illum placeat dignissimos ab. Commodi, consequuntur quis?",
    },
    {
        id: 3,
        img: img3,
        title: "Women Shirt",
        aosDelay: "800",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio amet quis minima explicabo cupiditate ducimus tempore quod earum ea consequatur ex harum illum placeat dignissimos ab. Commodi, consequuntur quis?",
    },
]
function TopProducts({ handleOrderPopup }) {
    return (
        <div>
            <div className="container">
                {/* Header Section */}
                <div className='text-left mb-24'>
                    <p data-aos="fade-up" className='text-sm text-[var(--color-primary)]'>Top Related Products</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quisquam.</p>
                </div>
                {/* Body Section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {ProductsData?.map(({ id, img, title, description, aosDelay }) => (
                        <div data-aos="zoom-in" data-aos-delay={aosDelay} key={id} className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[var(--color-primary)] hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            {/* Image Section */}
                            <div className="h-[100px]">
                                <img className='w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' src={img} alt="" />
                            </div>
                            {/* Description Section */}
                            <div className="p-4 flex flex-col items-center gap-2">
                                {/* Start Section */}
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                    <FaStar className="text-yellow-400"></FaStar>
                                </div>
                                <h1 className="font-bold text-xl dark:text-white">{title}</h1>
                                <p className="text-gray-500 line-clamp-2 text-sm group-hover:text-white duration-300">{description}</p>
                                <button onClick={handleOrderPopup} className="text-center px-4 py-2 text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full mt-1 group-hover:from-white group-hover:to-white font-semibold group-hover:scale-105 duration-300  group-hover:text-[var(--color-primary)]">Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts
