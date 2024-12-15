import React from "react"
import Title from "./Components/Title"
import ListForm from "./Components/Badges/ListForm"
import Badge from "./Components/Badges/Badge"
import BadgeTitle from "./Components/Badges/BadgeTitle"
import { FcOk, AiFillWarning, , FcInfo } from "react-icons/fc";

export default function App() {

  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']  
  const colorsUp = 
    colors.map(color => 
    color.charAt(0).toUpperCase() + color.slice(1))
 
  
    return (
        <div>
             
            <Title>1. Badges</Title>
                <ListForm className="listform"> 
                    Square
                    {colors.map((color, index) =>
                       <BadgeTitle key={color}> 
                            {`${colorsUp[index]}-Square`}
                            <Badge 
                                className={`badge ${color}`}>
                                Badge
                            </Badge>
                       </BadgeTitle>      
                        )}  
                </ListForm>
                <ListForm className="listform" variant='pill-margin'> 
                    Pill
                    {colors.map((color, index) =>
                       <BadgeTitle key={color}> 
                            {`${colorsUp[index]}-Pill`}
                            <Badge 
                                className={`badge ${color}`}
                                variant='form'>
                                Badge
                            </Badge>
                       </BadgeTitle>      
                        )}  
                </ListForm>    
                <Title>2. Banners</Title>
                <ListForm className="listform">    
                    <BadgeTitle> 
                        <Badge className='banner' variant='success' >
                        <span><FcOk /> <strong> Congratulations!</strong></span>
                         <br/>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam
                        </Badge>
                    
                    </BadgeTitle>
        
                </ListForm>
            
                
                  
        </div>
    )
}