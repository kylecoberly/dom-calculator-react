import React, { Component } from "react"

import Screen from "./Screen"
import Keypad from "./Keypad"

import "./Calculator.css"

export default class Calculator extends Component {
    state = {
        currentEntry: ""
    }
    isCharacterOperator = character => {
        return !character.match(/^[1-9]$/)
    }
    isNumber = character => {
        return !this.isCharacterOperator(character)
    }
    isLastEntryOperator = () => {
        return this.state.currentEntry.length > 0
            && this.isCharacterOperator(this.state.currentEntry.substr(-1))
    }
    isLastEntryNumber = () => {
        return this.state.currentEntry.length > 0
            && !this.isLastEntryOperator()
    }
    add = character => {
        this.setState(state => {
            state.currentEntry += character
            return state
        })
    }
    modify = character => {
        this.setState(state => {
            state.currentEntry = state.currentEntry.substr(0, state.currentEntry.length - 1)
            return state
        })
        this.add(character)
    }
    update = character => {
        if (this.isNumber(character) || this.isLastEntryNumber()){
            this.add(character)
        } else if (this.isLastEntryOperator()){
            this.modify(character)
        }
    }
    evaluate = () => {
        this.setState(state => {
            state.currentEntry = String(eval(state.currentEntry))
            return state
        })
    }
    clear = () => {
        this.setState({currentEntry: ""})
    }
    render(){
        return (
          <div id="calculator">
            <Screen currentEntry={this.state.currentEntry} />
            <Keypad
                evaluate={this.evaluate}
                update={this.update}
                clear={this.clear}
            />
          </div>
        )
    }
}
