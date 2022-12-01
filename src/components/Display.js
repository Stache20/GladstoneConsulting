import React , {useEffect, useState}  from 'react'
import ServiceDisplay from './ServiceDisplay'
import ServicesContent from './ServicesContent'
import Navbar from './Navbar'
import Footer from './Footer'
import Consulting from './Consulting'
import Home from './Home'



function Display() {


    const initialState='home';
    const [state, stateChange] = useState(initialState)

    useEffect(()=>{
        // on first render, state will be initial state, so it will 
        // not reload, but on subsequent state change, it will reload the page
        if(state!==initialState){
            window.location.reload()
        }
    }, [state]);



    const onMoreClicked = (e) => {
        const newState = e;
        stateChange({newState});
        console.log(state)
      };


    return(
<div>
        //Navbar
        <div>    
        <Navbar/>
        </div>
        
        /* If Homescreen is rendered */
        
    {state === 'home' && (
      <div>
      
      <Home/>
        <div id='services' class="how-section1 services container boxShadow">
                    <div  class="row">
                        
                            <ServiceDisplay image={require('../images/pexels-cottonbro-studio-4098228.jpg')}/>
                            <ServicesContent moreClicked={onMoreClicked} header="Consulting" text="Please write here one or two sentencess. sfdksdfjsdöfljdsfdsfsdfkldsf skf
                            jslfjsldfjsdlfjlksdfjlsdjflsdfjkdslfjksdjflksdf jsdlkfjksdfjsdklfjksdfksdljfjlsdjflsdjkfjklsjklfslk " link='/Consulting'/>
                    </div>
                    <div class="row">
                         <ServicesContent  moreClicked={onMoreClicked} header="Supervision" text="Please write here one or two sentencess. sfdksdfjsdöfljdsfdsfsdfkldsf jslfjsldfjsdlfjlksdfjlsdjflsdfjkdslfjksdjflksdf jsdlkfjksdfjsdklfjksdfksdljfjlsdjflsdjkfjklsjklfslk " link='/Supervision' />
                        
                        <ServiceDisplay image={require('../images/pexels-cottonbro-studio-4098369.jpg')} />
                    
                        
                    </div>
                    <div class="row">
                        
                        <ServiceDisplay image={require('../images/pexels-lisa-fotios-1655329.jpg')}/>
                        
                         <ServicesContent  moreClicked={onMoreClicked} header="Social Skill Group" text="Please write here one or two sentencess. sfdksdfjsdöfljdsfdsfsdfkldsf skf
                            jslfjsldfjsdlfjlksdfjlsdjflsdfjkdslfjksdjflksdf jsdlkfjksdfjsdklfjksdfksdljfjlsdjflsdjkfjklsjklfslk "/>
                    </div>
                    </div>   
</div>    )}

/* If Consulting is rendered */
{state === 'Consulting' && (<Consulting/>)}

    /* Footer */
    
    
         <div>    
        <Footer/>
        </div>               
                
</div>
    )
};


export default Display


/* <div>
    {state === 'home' && (
      <div>
      <Home/>
    <Display/>
    </div>
      )}
      {state === 'Consulting' && (<Consulting/>)}

    <Footer/>
    </div>
    */