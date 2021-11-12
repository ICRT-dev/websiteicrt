import React from "react";
import IndexNavbar from "../components/navbars/IndexNavbar";
import IndexHeader from "../components/headers/IndexHeader";
import Teams from "../components/Teams";
import Members from "../components/Members";


const Index = () => {
    return (
        <div className="transition duration-500">
            <IndexNavbar />
            <IndexHeader />
            <Teams />
            <Members />
        </div>
    )
}

export default Index;