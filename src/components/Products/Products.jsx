import React from 'react'
import img1 from "../../assets/women/women.png";
import img2 from "../../assets/women/women2.jpg";
import img3 from "../../assets/women/women3.jpg";
import img4 from "../../assets/women/women4.jpg";
import { FaStar } from 'react-icons/fa6';
const ProductData = [
  {
    id: 1,
    img: img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Printed T-shirt",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: img2,
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "800",
  },
]
function Products({handleOrderPopup}) {
  return (
    <div className='mt-14 mb-12'>
      <div className="container">
        {/* Header Section */}
        <div className='text-center mb-10 mx-auto max-w-[600px]'>
          <p data-aos="fade-up" className='text-sm text-[var(--color-primary)]'>Top Selling Products For You</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quisquam.</p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductData?.map(({ id, img, title, color, rating, aosDelay }) => (
              <div data-aos="fade-up" data-aos-delay={aosDelay} key={id} className='space-y-3'>
                <img
                  src={img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className='font-semibold'>{title}</h3>
                  <p className='text-sm text-gray-600'>{color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className='text-yellow-400' />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <button onClick={handleOrderPopup} className='text-white text-center bg-[var(--color-primary)] py-1 px-5 rounded-md mt-10 cursor-pointer'>View All Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
