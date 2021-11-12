import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo2.png"
import IndexDropdown from "../dropdowns/IndexDropdown";
import Mode from "../Mode";

const IndexNavbar = () => {
    const [colorTheme, setTheme] = Mode();
    return (
        <div className="w-full transition duration-500">
            <nav className="bg-white shadow dark:bg-gray-800 duration-500">
                <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                            href="/">
                                <img src={logo} alt="" className=" w-20 block" />
                            </a>
                        </div>
                    {/* <!-- Mobile menu button --> */}
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="items-center md:flex">
                    <div className="flex flex-col md:flex-row md:mx-10">
                        <a className="my-1 font-bold text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 duration-300 border-b-4 py-4 border-transparent hover:border-blue-500" href="#">
                            Home
                        </a>
                        <IndexDropdown/>
                        <a
                        className="
                            my-1 font-bold
                            text-gray-700
                            dark:text-gray-200
                            hover:text-blue-500
                            dark:hover:text-blue-400
                            md:mx-4 md:my-0 duration-300 border-b-4 py-4 border-transparent hover:border-blue-500
                        "
                        href="#"
                        >Project</a
                        >
                        <a
                        className="
                            my-1 font-bold
                            text-gray-700
                            dark:text-gray-200
                            hover:text-blue-500
                            dark:hover:text-blue-400
                            md:mx-4 md:my-0 duration-300 border-b-4 py-4 border-transparent hover:border-blue-500
                        "
                        href="#"
                        >Achievement</a
                        >
                        <a
                        className="
                            my-1 font-bold
                            text-gray-700
                            dark:text-gray-200
                            hover:text-blue-500
                            dark:hover:text-blue-400
                            md:mx-4 md:my-0 duration-300 border-b-4 py-4 border-transparent hover:border-blue-500
                        "
                        href="#"
                        >Contact</a
                        >
                    </div>

                    <div onClick={() => setTheme(colorTheme)} className="flex items-center justify-center md:block transition duration-300">
                        {colorTheme === "light" ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:hover:text-blue-500 dark:text-white transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-500 text-gray-700 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                        </svg> } 
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default IndexNavbar;