import classname from 'classnames'
import { FaCloudShowersHeavy } from "react-icons/fa";
export default function CardLogo({children, icon, ...rest}) {
    
    const classNameClass = 'card-logo'
    
    let allClasses = classname(classNameClass)

    return (
        <div className={allClasses} >
            {icon ? icon : <FaCloudShowersHeavy/>}
            {children}
        </div>
    )
}