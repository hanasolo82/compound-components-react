
import Title from "./Components/Title"
import ListForm from "./Components/Badges/ListForm"
import Badge from "./Components/Badges/Badge"
import BadgeTitle from "./Components/Badges/BadgeTitle"
import Banner from "./Components/Banners/Banner"
import BannerTitle from "./Components/Banners/BannerTitle"
import BannerLogo from "./Components/Banners/BannerLogo"
import BannerText from "./Components/Banners/BannerText"
export default function App() {

  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']  
  const colorsUp = 
    colors.map(color => 
    color.charAt(0).toUpperCase() + color.slice(1))
  
  
    return (
        <div>
             
            <Title>1. Badges</Title>
                <ListForm className="subtitle" variant="listform"> 
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
                <ListForm className="subtitle" variant="listform" > 
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
                <Banner className='banner' state='success'>
                        <BannerLogo/>
                        <BannerTitle>
                            Congratulations
                        </BannerTitle>
                        <BannerText>

                        </BannerText>
                    
                </Banner>
                
        
          
               
                
                
                       
                
            
                
                  
        </div>
    )
}