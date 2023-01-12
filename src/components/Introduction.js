import React from 'react'
import ScrollArrow from './ScrollArrow'


function Introduction(){

    return(
        

<div id='Home' className='box mobileIntroduction'>    
         <div class='text-center'>
         <h1>Marni Gladstone</h1>
         <h2 className='hideMobile'>M.A. (Spec Ed + ABA), BCBA</h2>
         <h2>Behaviour Consultant</h2>
        <br></br>
        
        <hr
   style={{
   background: "grey",
   height: "2px",
   width: '40%',
   border: "none",
   }}
/>

        <div>
        
            <ScrollArrow scrollTarget='Home'/>
            
        </div>
      

        </div>
     </div>   
    )


}

export default Introduction