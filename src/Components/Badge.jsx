import classnames from "classnames"

export default function Badge({ className , children, form, ...rest}) {
    let formClass = form && `badge ${form}`
    const allClass = classnames(className, formClass)
    
    return (
        
            <div className={allClass} {...rest}>
                { children }
            </div>
       
    )
}