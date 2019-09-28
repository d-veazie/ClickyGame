import React from "react";
import "./style.css"
import "../counter/Counter"

const WhiskeyCard = (props) => {
    return (
        <div className="card" onClick={() => props.counter(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default WhiskeyCard; 