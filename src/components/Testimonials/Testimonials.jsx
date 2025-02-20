import React from 'react'
import Slider from 'react-slick'

const testimonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, numquam tenetur quia cupiditate natus qui? In placeat consectetur beatae repellat quidem recusandae",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, numquam tenetur quia cupiditate natus qui? In placeat consectetur beatae repellat quidem recusandae",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, numquam tenetur quia cupiditate natus qui? In placeat consectetur beatae repellat quidem recusandae",
        img: "https://picsum.photos/103/103"
    },
]
function Testimonials() {
    var settings = {
        dots: true,
        arrows: false,
        Infinity: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinity: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* Header Section */}
                <div className='text-center mb-10 mx-auto max-w-[600px]'>
                    <p data-aos="fade-up" className='text-sm text-[var(--color-primary)]'>What Our Customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quisquam.</p>
                </div>
                {/* Testimonials Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {testimonialsData?.map(({ id, name, text, img }) => (
                            <div key={id} className="my-5">
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-[var(--color-primary)]/10 relative'>
                                    <div className='mb-4'>
                                        <img src={img} className='rounded-full w-20 h-20' alt="" />

                                    </div>
                                    <div className='space-y-3'>
                                        <p className='text-xs text-gray-500'>{text}</p>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-white'>{name}</h1>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 mt-9">&rsquo; &rsquo;</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
