import React from "react";

const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-200 dark:bg-gradient-to-l dark:from-blue-500 dark:to-blue-300  transition-color duration-500">

            <div className="mx-16 py-20">
                <div align="center" className="py-8 mb-10 text-5xl font-bold items-center justify-between">
                    <h1>Our Projects</h1>
                </div>

                <div className="flex flex-row pt-3">
                    <div className="w-1/3">
                        <p className="text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos molestias commodi delectus id corporis, facilis quisquam ducimus accusantium quam consequatur officiis deleniti quae veritatis inventore doloribus, suscipit perspiciatis obcaecati.</p>
                    </div>
                    <div className="w-2/3 items-center grid grid-cols-2 gap-12 pl-3">
                        <div>
                            <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                            width="360" className="rounded-xl"
                            alt="" />
                        </div>
                        <div>
                            <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                            width="360" className="rounded-xl"
                            alt="" />
                        </div>
                        <div>
                            <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                            width="360" className="rounded-xl"
                            alt="" />
                        </div>
                        <div>
                            <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                            width="360" className="rounded-xl"
                            alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;