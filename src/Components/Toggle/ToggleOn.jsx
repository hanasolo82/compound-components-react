import React from "react"
import { ToggleContext } from "./Toggle"

// eslint-disable-next-line react/prop-types
export default function ToggleOn({children}) {

    const { handleToggle } = React.useContext(ToggleContext)

    return   handleToggle ? children : null
}