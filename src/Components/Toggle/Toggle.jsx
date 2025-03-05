import React from "react"

const ToggleContext = React.createContext()

// eslint-disable-next-line react/prop-types
export default function Toggle({children}) {

    const [ on, setOn ] = React.useState(false)

    function handleToggle() {
        setOn(prevOn => !prevOn)
    }

    return (

        <ToggleContext.Provider value={{on, handleToggle}}>
            {children}
        </ToggleContext.Provider>
    )
}
