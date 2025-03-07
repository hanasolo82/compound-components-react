import React from "react"
import { ToggleContext } from "./Toggle"

// eslint-disable-next-line react/prop-types
export default function ToggleOff({children}) {

    const { handleToggle } = React.useContext(ToggleContext)

    return   handleToggle ? null : children
}