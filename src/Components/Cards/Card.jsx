

import React from "react"


const CardContext = React.createContext()

export default function Card({children}) {


    return (
        <CardContext.Provider>
            <div className="card">
                {children}
            </div>
        </CardContext.Provider>
        
    )
}


export { CardContext }