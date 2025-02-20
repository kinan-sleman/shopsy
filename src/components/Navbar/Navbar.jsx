import React from 'react'
import Logo from "../../assets/logo.png"
import { IoCartOutline, IoSearchCircle } from 'react-icons/io5'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
]
function Navbar({handleOrderPopup}) {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900  dark:text-white duration-200 relative z-40'>
            {/* Upper Nav */}
            <div className="bg-[var(--color-primary)]/40 py-2">
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img className='w-10 uppercase' src={Logo} alt="" />
                            Shopsy
                        </a>
                    </div>
                    {/* search bar  */}
                    <div className='flex items-center justify-between gap-4'>
                        <div className='group relative hidden md:block'>
                            <input
                                type="text"
                                placeholder='search'
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 bg-white rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary p-lg dark:bg-gray-800 dark:border-gray-500 dark:text-white"
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-[var(--color-primary)] absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        {/* order button */}
                        <button className='bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-200 text-white py-1 px-4 rounded-full flex gap-3 items-center group' onClick={handleOrderPopup}>
                            <span className='group-hover:block hidden transition-all duration-200'>Order Now</span>
                            <FaCartShopping className='text-white text-xl drop-shadow-sm cursor-pointer' />
                        </button>
                        {/* DarkMode Switch */}
                        <DarkMode />
                    </div>
                </div>
            </div>
            {/* Lower Nav */}
            <div data-aos="zoom-in" className='flex justify-center container'>
                <ul className='hidden md:flex items-center gap-4'>
                    {Menu.map(({ id, name, link }) => (
                        <li key={id}>
                            <a className='inline-block px-2 md:px-4 hover:text-[var(--color-primary)] transition-all duration-200' href={link}>{name}</a>
                        </li>
                    ))}
                    {/* Simple Dropdown and list */}
                    <li className='group relative cursor-pointer'>
                        <a className='flex items-center gap-[2px] py-2' href="#">
                            Trending Products
                            <span>
                                <FaCaretDown />
                            </span>
                        </a>
                        <div className='absolute z-[9999] opacity-0 group-hover:opacity-100 w-[150px] rounded-md p-2 bg-white text-black shadow-md transition-all duration-200 dark:bg-gray-800 dark:text-white'>
                            {DropdownLinks.map(({ id, name, link }) => (
                                <div key={id}>
                                    <a className='inline-block p-2 w-full rounded-md hover:bg-[var(--color-primary)]/20' href={link}>
                                        {name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
