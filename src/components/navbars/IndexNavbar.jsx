import React from "react";
import logo from "../../assets/img/logo.png"
import IndexDropdown from "../dropdowns/IndexDropdown";

const IndexNavbar = () => {
    return (
        <div>
            <nav className="bg-white shadow dark:bg-gray-800">
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
                        {/* <a
                        className="
                            my-1 font-bold
                            text-gray-700
                            dark:text-gray-200
                            hover:text-blue-500
                            dark:hover:text-blue-400
                            md:mx-4 md:my-0 duration-300 border-b-4 py-4 border-transparent hover:border-blue-500
                        "
                        href="#"
                        ></a
                        > */}
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
                        >Contact</a
                        >
                    </div>

                    <div className="flex justify-center md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default IndexNavbar;