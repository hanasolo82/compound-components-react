import classnames from 'classnames'

export default function ListForm({ children, variant, className, ...rest}) {
    let classVariant = variant && `listform ${variant}`
    const allClasses = classnames(className, classVariant)
    
    return (
        <div className={allClasses}>
            { children }
        </div>
    )
}