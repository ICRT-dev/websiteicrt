import React from "react";
import Img from "../../assets/img/header.png"
import HeaderButton from "../buttons/HeaderButton";

const IndexHeader = () => {
    return (
        <div className='bg-blue-200'>

            <div className="grid grid-cols-2 gap-2 mx-16 py-10 items-center">
                <div className="flex flex-col">
                    <div className="flex text-5xl w-full mb-3">
                        <h1 className="inline font-bold text-black">Ikmi Cirebon </h1>
                        <h1 className="inline ml-2 text-gray-500">Robotik Team</h1>
                    </div>
                    <div className="my-3">
                        <span className="font-bold text-black text-xl">Visi</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi deserunt veniam quisquam obcaecati quia cupiditate iusto? Quasi, quos nemo nam accusantium quisquam ipsum, voluptas tempore quam hic accusamus eaque.</p>
                    </div>
                    <div className="my-3">
                        <span className="font-bold text-black text-xl">Misi</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi deserunt veniam quisquam obcaecati quia cupiditate iusto? Quasi, quos nemo nam accusantium quisquam ipsum, voluptas tempore quam hic accusamus eaque.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 grid-rows-2">

                    </div>
                    <div className="flex flex-row mt-3">
                        <HeaderButton name="Project" />
                        <HeaderButton name="Achievement" />
                        <HeaderButton name="Contact" />
                    </div>
                </div>
                <div className="ml-auto">
                    <img src={Img} alt="" width="480px" />
                </div>
            </div>

        </div>
    )
}

export default IndexHeader;