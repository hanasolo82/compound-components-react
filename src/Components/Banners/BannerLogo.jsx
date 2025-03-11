
import { GoCheckCircle, GoAlert, GoXCircle, GoInfo } from "react-icons/go";
//importar el status de banner y crear los condicionales esto con create context


export default function BannerLogo({children}) {
    const logoSelector = {}

    return (
        <div className='logo'>
            <GoCheckCircle/>
            {children}
        </div>
    )
}