import React from "react"
import "./Screen.css"

export default function Screen(props) {
    return (
        <div id="screen-container">
          <div id="screen">{props.currentEntry}</div>
        </div>
    )
}

