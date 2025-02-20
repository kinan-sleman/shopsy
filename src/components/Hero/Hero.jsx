import React from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from 'react-slick';
const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vero accusamus corporis ipsam? Labore, amet. Labore nostrum iste cumque! Error porro est quia modi hic ea ipsam optio veritatis aliquam."
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 30% off on all Men's Wear",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vero accusamus corporis ipsam? Labore, amet. Labore nostrum iste cumque! Error porro est quia modi hic ea ipsam optio veritatis aliquam."
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on all Men's Wear",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas vero accusamus corporis ipsam? Labore, amet. Labore nostrum iste cumque! Error porro est quia modi hic ea ipsam optio veritatis aliquam."
    },
]
function Hero({handleOrderPopup}) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        slidesToShow: 1,
    };
    return (
        <div className='relative z-10 overflow-hidden min-h-[650px] md:min-h-[550px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
            {/* Background Pattern */}
            <div className='w-[700px] h-[700px] bg-[var(--color-primary)]/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
            {/* Hero Section */}
            <div className="container pb-8">
                <Slider {...settings}>
                    {ImageList.map(({ id, img, title, description }) => (
                        <div key={id}>
                            <div className='grid grid-cols-2'>
                                {/* Text Content Section  */}
                                <div className='flex flex-col justify-center gap-4 pt-0 md:pt-12 order-1 md:order-2 text-left md:text-center'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-6xl md:text-5xl lg:text-7xl font-bold'>{title} </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        data-aos-once="true">{description}</p>
                                    <div>
                                        <button
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="100"
                                            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-2 px-4 rounded-full text-white cursor-pointer"
                                            onClick={handleOrderPopup}
                                            >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div
                                    data-aos="zoom-in"
                                    data-aos-once={true}
                                    className='order-2 md:order-1'>
                                    <div><img className='size-[450px] md:size[300px] object-contain mx-auto scale-105 md:scale-120' src={img} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero
