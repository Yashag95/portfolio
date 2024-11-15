import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import facebooklogo from "../assets/facebooklogo.png";
import instagram from "../assets/Instagram2.png"

const Footer = () => {
  return (
    <div className='text-2x1  font-semibold px-50 bg-black text-white text-center ' >
      {/* <h3 style={{padding: "2px", textAlign: "center" ,fontSize: "30px" , fontStyle: ""}}>Thanks to visit our website</h3> */}
      <div><h2 className="text-4xl sm:text-7xl  text-white" style={{fontSize: "30px"}} >
            Follow me on  
            <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Facebook', ' Instagram']}
            loop={500}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1000}
            
          />
        </span>
          </h2> </div >  <div>     
            <img src={facebooklogo}  className= "mx-auto d-block" alt= 'fblogo' width= '130px' style={{ cursor: 'pointer' ,padding: '10px', }} />
            <img src={instagram}  className= "mx-auto d-block" alt= 'instalogo' width= '130px' style={{ cursor: 'pointer' ,padding: '10px'}} />

          {/* <button type='submit' className="text-4xl font-bold  border-gray-1000 p-1 inline" style={{borderRadius: "10ox" , color: "white"}}> <a href='https://docs.npmjs.com/cli/v6/commands/npm-build'> facebook</a></button>  */}
    </div> </div>

  )
}

export default Footer
