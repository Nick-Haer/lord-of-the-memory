import React from "react";
import "./style.css";

function Character(props) {
    return ( 
    <>
    <img className="char-image" onClick={props.clicked} src={props.source} alt={props.name}/>
    </>
    )
}

export default Character;