import React from 'react'
import FooterLogo from "../../assets/logo.png"
import Banner from "../../assets/website/footer-pattern.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const footerStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeate: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "Abouy",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

function Footer() {
    return (
        <div data-aos="zoom-in" style={footerStyle} className='text-white'>
            <div className="container">
                <div className='grid md:grid-cols-3 pb-44 pt-5'>
                    {/* Company Details */}
                    <div className='py-8 px-4'>
                        <h1 className='text-3xl text-left md:text-xl md:text-justify font-bold mb-3 flex items-center gap-3'>
                            <img className='max-w-[50px]' src={FooterLogo} alt="" />
                            Shopsy
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit labore amet accusantium eligendi aliquid a qui tempora vel voluptatum harum repellat dolor aspernatur, recusandae rerum eveniet, culpa autem magnam!</p>
                    </div>
                    {/* Footer Links */}
                    <div className="grid grid-cols-3 md:grid-cols-2 cols-span-2 md:pl-10">
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-3xl md:text-xl text-left md:text-justify font-bold mb-3'>Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map(({ title, link }) => (
                                        <li
                                            className="cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-1 duration-300 text-gray-200"
                                            key={title}
                                        >
                                            <span>{title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-3xl md:text-xl text-left md:text-justify font-bold mb-3'>Social Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map(({ title, link }) => (
                                    <li
                                        className="cursor-pointer hover:text-[var(--color-primary)] hover:translate-x-1 duration-300 text-gray-200"
                                        key={title}
                                    >
                                        <span>{title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href=""><FaInstagram className='text-3xl' /></a>
                            <a href=""><FaFacebook className='text-3xl' /></a>
                            <a href=""><FaLinkedin className='text-3xl' /></a>
                            <a href=""><FaInstagram className='text-3xl' /></a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Noida, Uttr Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+91 123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
