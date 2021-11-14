import React from "react";

const HeaderButton = (props) => {
    return (
        <div>
            <button
                className="
                    bg-blue-500 dark:bg-blue-500
                    text-white dark:text-gray-800
                    font-bold
                    text-base
                    px-8
                    py-3
                    rounded-full
                    shadow-md
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-out
                    transition
                    duration-300
                    mx-3
                "
                type="button"
                >
                {props.name}
            </button>
        </div>
    )
}

export default HeaderButton;