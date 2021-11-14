import React from "react";
import IndexNavbar from "../components/navbars/IndexNavbar";
import IndexHeader from "../components/headers/IndexHeader";
import Teams from "../components/Teams";
import Members from "../components/Members";
import Projects from "../components/Projects";


const Index = () => {
    return (
        <div className="transition duration-500">
            <IndexNavbar />
            <IndexHeader />
            <Teams />
            <Members />
            <Projects />
        </div>
    )
}

export default Index;