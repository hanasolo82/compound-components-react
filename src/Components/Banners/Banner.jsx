import classnames from 'classnames'

// eslint-disable-next-line react/prop-types
export default function Banner({children, className, state}) {
   // crear context para pasar state a los hijos 
    let classBanner = state ? `banner-${state}`: null
    let allClasses = classnames(className, classBanner)
    
     return (
            <div className={allClasses}>
                
                {children}
                
            </div>
           

     )
}