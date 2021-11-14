import React from "react";
import Img from "../../assets/img/header.png"
import HeaderButton from "../buttons/HeaderButton";

const IndexHeader = () => {
    return (
        <div className='bg-gradient-to-l from-blue-400 to-blue-200 dark:bg-gradient-to-l dark:from-blue-500 dark:to-blue-300  transition-color duration-500'>

            <div className="flex flex-row mx-16 py-20 items-center transition duration-500">
                <div className="flex flex-col w-2/3">
                    <div className="flex text-5xl mb-3">
                        <h1 className="inline font-bold text-black">Ikmi Cirebon </h1>
                        <h1 className="inline ml-5 text-gray-700">Robotik Team</h1>
                    </div>
                    <div className="my-3 w-2/3">
                        <span className="font-bold text-black text-xl">Visi</span>
                        <p className="text-sm dark:text-gray-700 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi deserunt veniam quisquam obcaecati quia cupiditate iusto? Quasi, quos nemo nam accusantium quisquam ipsum, voluptas tempore quam hic accusamus eaque.</p>
                    </div>
                    <div className="my-3 w-2/3">
                        <span className="font-bold text-black text-xl">Misi</span>
                        <p className="text-sm dark:text-gray-700 duration-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi deserunt veniam quisquam obcaecati quia cupiditate iusto? Quasi, quos nemo nam accusantium quisquam ipsum, voluptas tempore quam hic accusamus eaque.</p>
                    </div>
                    <div className="flex flex-row mt-3 items-center">
                        <HeaderButton name="Project" />
                        <HeaderButton name="Achievement" />
                        <HeaderButton name="Contact" />
                    </div>
                </div>
                <div className="mx-auto">
                    <img src={Img} alt="" width="480px" />
                </div>
            </div>

        </div>
    )
}

export default IndexHeader;