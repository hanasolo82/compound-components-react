

export default function Button({children, className, ...rest}) {
    const allClasses = className

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}