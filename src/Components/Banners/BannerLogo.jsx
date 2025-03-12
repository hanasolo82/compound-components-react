import React from 'react'
import { GoCheckCircle, GoAlert, GoXCircle, GoInfo } from "react-icons/go";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import { BsFillInfoCircleFill } from "react-icons/bs";
//importar el status de banner y crear los condicionales esto con create context
import { BannerContext } from './Banner';


export default function BannerLogo({children}) {
    const status = React.useContext(BannerContext) 

    let logoSelector 
    if(status === 'success') {
        logoSelector = <AiFillCheckCircle  />
    }
    if(status === 'warning') {
        logoSelector = <TiWarning style={{fill:"orange"}}/>
    }
    if(status === 'error') {
        logoSelector = <AiFillCloseCircle style={{fill:"red"}}/> 
    }
    if(status === 'neutral') {
        logoSelector = <BsFillInfoCircleFill/>
    }
   
    return (
        <div className='logo'>
            {logoSelector}
            {children}
            
        </div>
    )
}