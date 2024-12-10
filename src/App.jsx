import React from "react"
import Title from "./Components/Badges/Title"
import ListForm from "./Components/Badges/ListForm"
import Badge from "./Components/Badge"
import BadgeTitle from "./Components/BadgeTitle"


export default function App() {
  const colors = ['gray', 'red', 'yelow', 'green', 'blue', 'indigo', 'purple', 'pink']  
  const colorsUp = colors.map(color => color.charAt(0).toUpperCase() + color.slice(1, color.length))
  console.log(colorsUp)
    return (
        <div>
             
            <Title>Badges</Title>
                <ListForm> 
                    Square
                    {colors.map((color, index) =>
                       <BadgeTitle key={color}> 
                            {`${colorsUp[index]}-Square`}
                            <Badge className={`badge ${color}`}>
                                Badge
                            </Badge>
                       </BadgeTitle>      
                        )}  
                </ListForm>
                <ListForm> Pill
                </ListForm>    
             
        </div>
    )
}