import React, { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useClickOutside } from '../../hooks/useClickOutside';

function Popup({ orderPopup, setOrderPopup }) {
    const popupRef = useRef()
    useClickOutside(popupRef, () => setOrderPopup(false))
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOrderPopup(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setOrderPopup]);
    return (
        <>
            {orderPopup && (
                <div className="popup">
                    <div className="fixed h-screen w-screen bg-black/50 top-0 left-0 z-50 backdrop-blur-sm">
                        <div ref={popupRef} className="fixed top-1/2 left-1/2 bg-white -translate-y-1/2 -translate-x-1/2 p-4 shadow-md dark:bg-gray-900 duration-300 w-[300px] rounded">
                            {/* header */}
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h1>Order Now</h1>
                                </div>
                                <div>
                                    <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setOrderPopup(false)} />
                                </div>
                            </div>
                            {/* form section */}
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                                />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                                />
                                <input
                                    type="text"
                                    placeholder='Address'
                                    className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-200 text-white py-1 px-4 rounded-full flex gap-3 items-center group'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup
