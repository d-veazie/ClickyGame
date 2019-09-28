import React from "react";
import "./style.css"

function WhiskeyCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WhiskeyCard; 