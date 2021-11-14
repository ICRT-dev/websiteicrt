import React from "react";
import TeamsCard from "./cards/TeamsCard";

const Teams = () => {
    return (
        <div id="team" className="dark:bg-gray-800 duration-500">
            <div align="center" className="mx-16 pt-24 dark:text-white text-5xl font-bold items-center justify-between">
                <h1>Our Teams</h1>
            </div>
            <div className="mx-16 py-20 flex flex-row items-center justify-between">
                <TeamsCard name="Al-Fatih Team" />
                <TeamsCard name="Al-Khawarismi Team" />
                <TeamsCard name="Heroes Team" />
                <TeamsCard name="Al-Jazari Team" />
            </div>

        </div>
    )
}

export default Teams;