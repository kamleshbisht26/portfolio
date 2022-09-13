import React from 'react'
import './Home.css'
import Github from '../img/github.png'
import Linkdn from '../img/linkedin.png'
import Insta from '../img/instagram.png'
import Vector from '../img/Vector1.png'
import Vectorss from '../img/Vector2.png'
import BOY from '../img/boy.png'
import Crown from '../img/crown.png'
import emojiglass from '../img/glassesimoji.png'
import Thumb from '../img/thumbup.png'
import Floating from '../floatingdiv/Floating'
const Home = () => {
  return (
   <div className="hero-home">
    <div className="hero-left">
        <span className='hy'>Hy! I Am</span>
        <span className="andrew">Andrew Thomas</span>
        <span className="description">Frontend Developer with high level of experience in web designing and development producing the quality work</span>
        <button className='button'> Hire me</button>
        
        <div className="hero-left-icons">

            <img src={Github} alt="githubs" />
            <img src={Linkdn} alt="LINKDN" />
            <img src={Insta} alt="LINKDN" />
        </div>

    </div>

    <div className="hero-right">

      
        <img src={Vector} alt="vector"  className='hero-right-img '/>
        <img src={Vectorss} alt="vectors"  className='hero-right-img '/>
        <img src={BOY}alt="boy" className='hero-right-img ' />
        <img src={emojiglass}alt="emoji" className='hero-right-img ' />
      
      <div style={{top:"-4%",left:"68%"}}>   
       <Floating  image={Crown} text1="Web" text2="Developer"  /></div>
      
          <div style={{ top:"18rem" ,left:"0px"

          }}>
            <Floating image={Thumb} text1="Best" text2="Desing Award"/>
          </div>
          
          <div className="blur" style={{background:"rgb(238 210 255)"}}>

          </div>

    </div>
   </div>
  )
}

export default Home