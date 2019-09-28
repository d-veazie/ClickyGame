import React from "react";
import "./style.css"




function Header(props) {
    return (
        <div className="jumbotron">
        <div className="heading">
            {props.title}
        </div>
        <p className="card-text">Score: {props.score}/8 <br></br>High Score: {props.highscore}</p>   


        </div>

        
    )
}

export default Header;