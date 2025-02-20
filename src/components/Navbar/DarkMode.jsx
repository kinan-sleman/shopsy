import React, { useEffect, useState } from 'react'
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "light") {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } else {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
    }, [theme])
    return (
        <div className='relative' >
            <img
                src={LightButton}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
                alt="" />
            <img
                src={DarkButton}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className='w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
                alt="" />
        </div>
    )
}

export default DarkMode
