import React from "react";
import "./style.css"

fucntion Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;