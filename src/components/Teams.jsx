import React from "react";
import TeamsCard from "./cards/TeamsCard";

const Teams = () => {
    return (
        <div className="bg-gray-300">
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