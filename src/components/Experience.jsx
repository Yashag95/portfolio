import React from 'react'

const Experience = () => {
    return (
        <div name= "Experience" className=' bg-gradient-to-b from-gray-800 to-black text-white' style={{ marginBottom:"2px", bottom: "10px" }}>
      <div className="max-w-screen-lg mx-auto flex flex-col w-full h-full" >
        <div  style={{fontStyle: "italic", marginBottom : "50px"}} > <br/><br/><br/>
            <h1 className='text-4xl font-bold inline border-b-4' style={{color: "skyblue", background: "black"}}>Experience -
            </h1>

            <br/> <br/> 
            <div className= 'text-3xl font-bold'>Freelance</div>
            <h1 style={{fontSize: "25px"}}>Full Stack Web Developer &nbsp; (Oct 2019 - Dec 2021) </h1>

             <br/> <br/> 
            <div className= 'text-3xl font-bold'>Helloverify India Pvt. Ltd   </div>
            <h1 style={{fontSize: "25px"}}>Data analyst &nbsp; (Jan 2022- July 2022)</h1>
            

             <br/> <br/> 
            <div className= 'text-3xl font-bold' > Akal information system Pvt. Ltd     </div>
            <h1 style={{fontSize: "25px"}}>System Engineer &nbsp; (July 2022- Sep 2022)</h1>
           

            <br/> <br/>
            <div className= 'text-3xl font-bold'>Velocis system Pvt. Ltd.  </div>
            <h1 style={{fontSize: "25px"}}>Software Developer &nbsp; (Sep 2022- Current)</h1>
          
        </div>
        </div>
        </div>
    )
}
export default Experience

