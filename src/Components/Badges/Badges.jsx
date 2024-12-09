import React from "react"
const BadgesContext = React.createContext()

export default function Badges({ children }) {


    return (
        <BadgesContext.Provider>
             <div>
                { children }
            </div>
    
        </BadgesContext.Provider>
    )

}
export  { BadgesContext }