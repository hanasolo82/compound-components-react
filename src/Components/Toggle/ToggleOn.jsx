import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOn() {
    const { on } = React.useContext(ToggleContext)

    return (
        on ? <div>Something to render as a child</div> : null 
    )
}