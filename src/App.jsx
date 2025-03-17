
import Title from "./Components/Title"
import ListForm from "./Components/Badges/ListForm"
import Badge from "./Components/Badges/Badge"
import BadgeTitle from "./Components/Badges/BadgeTitle"
//fix this with index
import Banner from "./Components/Banners/Banner"
import BannerTitle from "./Components/Banners/BannerTitle"
import BannerLogo from "./Components/Banners/BannerLogo"
import BannerText from "./Components/Banners/BannerText"

import Toggle from './Components/Toggle/index'
import Card from './Components/Cards/index'


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
                <Toggle>
                    <Toggle.Button>
                        <Banner className='banner' state='success'>
                                <BannerLogo/>
                                <BannerTitle> Update adviable
                                    <Toggle.On>
                                        <BannerText>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                                        </BannerText>
                                    </Toggle.On>
                                </BannerTitle>
                        </Banner>
                    </Toggle.Button>
                </Toggle>
                <Toggle>
                    <Toggle.Button>
                        <Banner className='banner' state='warning'>
                                <BannerLogo/>
                                <BannerTitle> Update adviable
                                    <Toggle.On>
                                        <BannerText>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                                        </BannerText>
                                    </Toggle.On>
                                </BannerTitle>
                        </Banner>
                    </Toggle.Button>
                </Toggle>
                <Toggle>
                    <Toggle.Button>
                        <Banner className='banner' state='error'>
                                <BannerLogo/>
                                <BannerTitle> Update adviable
                                    <Toggle.On>
                                        <BannerText>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                                        </BannerText>
                                    </Toggle.On>
                                </BannerTitle>
                        </Banner>
                    </Toggle.Button>
                </Toggle>
                <Toggle>
                    <Toggle.Button>
                        <Banner className='banner' state='neutral'>
                                <BannerLogo/>
                                <BannerTitle> Update adviable
                                    <Toggle.On>
                                        <BannerText>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                                        </BannerText>
                                    </Toggle.On>
                                </BannerTitle>
                        </Banner>
                    </Toggle.Button>
                </Toggle>
                <Title>3. Card</Title>
                    <Card>
                    <Card.Logo icon={<Card.Cloud />}>
                        
                    </Card.Logo> 
                       <Card.Box>
                            
                            <Card.Title>
                                Easy Deployment 
                            </Card.Title>
                            <Card.Text>
                                Ac tincidunt sapien vehicula erat auctor    pellentesque rhoncus. Et magna sit morbi   lobortis.
                            </Card.Text>
                       </Card.Box>
                    </Card>
                
                
        </div>
    )
}