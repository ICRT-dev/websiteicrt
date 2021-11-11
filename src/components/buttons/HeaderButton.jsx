import React from "react";

const HeaderButton = (props) => {
    return (
        <div>
            <button
                className="
                    bg-blue-600
                    text-white
                    active:bg-purple-600
                    font-bold
                    uppercase
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
                    ease-linear
                    transition-all
                    duration-150
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