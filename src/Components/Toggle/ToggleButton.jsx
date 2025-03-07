import React from 'react'
import { ToggleContext } from './Toggle'


// eslint-disable-next-line react/prop-types
export default function ToggleButton({children}) {

    const { toggle } = React.useContext(ToggleContext)
    console.log('toggle component')
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}