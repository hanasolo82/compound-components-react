import React from "react"
import Title from "./Components/Badges/Title"
import ListForm from "./Components/Badges/ListForm"
import Badge from "./Components/Badge"
import BadgeTitle from "./Components/BadgeTitle"


export default function App() {

  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']  
  const colorsUp = 
    colors.map(color => 
    color.charAt(0).toUpperCase() + color.slice(1))
  
    return (
        <div>
             
            <Title>Badges</Title>
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
                                form='form'>
                                Badge
                            </Badge>
                       </BadgeTitle>      
                        )}  
                </ListForm>    
             
        </div>
    )
}