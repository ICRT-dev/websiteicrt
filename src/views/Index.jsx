import React from "react";
import IndexNavbar from "../components/navbars/IndexNavbar";
import IndexHeader from "../components/headers/IndexHeader";
import Teams from "../components/Teams";

const Index = () => {
    return (
        <div>
            <IndexNavbar />
            <IndexHeader />
            <Teams />
        </div>
    )
}

export default Index;