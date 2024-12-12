import classnames from "classnames"

export default function Badge({ className, variant, children, ...rest}) {
let variantClass = variant && `badge ${variant}`
    const allClass = classnames(className, variantClass)
    
    return (
        
            <div className={allClass} {...rest}>
                { children }
            </div>
       
    )
}