import React from 'react'
import classnames from 'classnames'


const BannerContext = React.createContext()

// eslint-disable-next-line react/prop-types
export default function Banner({children, className, state}) {

    

    
    
    let classBanner = state ? `banner-${state}`: null
    let allClasses = classnames(className, classBanner)
    
     return (

            
            <BannerContext.Provider value={state}>
                <div className={allClasses}>
                        {children}
                </div>
            </BannerContext.Provider>

     )
}
export  { BannerContext }