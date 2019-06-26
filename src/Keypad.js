import React, {Component} from "react"

import Button from "./Button"
import getButtons from "./data/buttons"

import "./Keypad.css"

export default class Keypad extends Component {
    add = character => {
        this.props.update(character)
    }
    state = {
        buttons: getButtons(this.props.clear, this.add, this.props.evaluate)
    }
    createButtons = () => {
        return this.state.buttons.map(button => {
            return <Button
                display={button.display}
                action={button.action || button.display}
                isOperator={!!button.isOperator}
                id={button.id || ""}
                behavior={button.behavior}
            />
        })
    }
    render() {
        return (
            <div id="buttons-container">
              <div className="buttons">
                {this.createButtons()}
                <div className="l-row">
                    <Button id="zero" behavior={this.add} display="0" />
                </div>
              </div>
            </div>
        )
    }
}

