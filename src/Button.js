import React from "react"

import "./Button.css"

export default function Button(props) {
    function behavior(){
        props.behavior(props.action)
    }
    return (
        <span
            onClick={behavior}
            className={props.isOperator ? "operator" : ""}
            id={props.id}
        >{props.display}</span>
    )
}
