import React from "react";
import worldSvg from "../images/world.svg"

function Header() {
    return (
        <div className="header">
            <img src={worldSvg} alt="world"></img>
            my travel journal
        </div>
    )
}

export default Header