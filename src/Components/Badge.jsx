import classnames from "classnames"

export default function Badge({ className , children, ...rest}) {
    
    const allClass = classnames(className)
    
    return (
        
            <div className={allClass} {...rest}>
                { children }
            </div>
       
    )
}