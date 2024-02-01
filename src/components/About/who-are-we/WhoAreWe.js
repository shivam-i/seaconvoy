import React from "react";

import "./WhoAreWe.css"

function WhoAreWe() {
    return (
        <div className="who-are-we-container">
            <div className="who-are-we">
                <img src="./images/about-page/who-are-we/who-are-we.svg" alt="" className="who-are-we-heading" />
                <p>The team members exposure at IIT Madras for a decade in the fields of hydrodynamic testing, validation of designs, consulting for shipyards and boat builders, design approvals, and product development related to defence application for powering of amphibious vehicles brings in invaluable comprehensive professional resource.
                </p>
            </div>
            <img src="./images/about-page/who-are-we/who-are-we-line.svg" alt="" className="who-are-we-line"/>
        </div>
    );
}

export default WhoAreWe;