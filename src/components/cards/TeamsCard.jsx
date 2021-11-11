import React from "react";

const TeamsCard = (props) => {
    return (
        <div>

            <div className="bg-white items-center justify-between w-64 mx-5 rounded-xl pb-3" width="350px">
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                    className="rounded-xl mb-4"
                    alt=""
                    width="360px"
                    align="center"
                />

                <div className="text-center">
                    <h5 className="text-xl font-semibold my-10">{props.name}</h5>

                    <p className="my-4 mx-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
                    tenetur, voluptatibus harum consequuntur alias quaerat excepturi
                    temporibus nisi commodi, ex, ratione quae soluta! Saepe alias dolores
                    dolorem assumenda totam?
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TeamsCard;