import React , {useEffect, useState}  from 'react'
import ServiceDisplay from './ServiceDisplay'
import ServicesContent from './ServicesContent'



function Display() {


    return(

        <div id='services' class="how-section1 services container boxShadow">
                    <div  class="row">
                        
                            <ServiceDisplay image={require('../images/pexels-cottonbro-studio-4098228.jpg')}/>
                            <ServicesContent  header="Consulting" text="Please write here one or two sentencess. sfdksdfjsdöfljdsfdsfsdfkldsf skf
                            jslfjsldfjsdlfjlksdfjlsdjflsdfjkdslfjksdjflksdf jsdlkfjksdfjsdklfjksdfksdljfjlsdjflsdjkfjklsjklfslk " link='/Consulting'/>
                    </div>
                    <div class="row">
                         <ServicesContent  header="Supervision" text="Please write here one or two sentencess. sfdksdfjsdöfljdsfdsfsdfkldsf jslfjsldfjsdlfjlksdfjlsdjflsdfjkdslfjksdjflksdf jsdlkfjksdfjsdklfjksdfksdljfjlsdjflsdjkfjklsjklfslk " link='/Supervision' />
                        
                        <ServiceDisplay image={require('../images/pexels-cottonbro-studio-4098369.jpg')} />
                    
                        
                    </div>
                    <div class="row">
                        
                        <ServiceDisplay image={require('../images/pexels-lisa-fotios-1655329.jpg')}/>
                        
                         <ServicesContent header="Social Skill Group" text="Please write here one or two sentencess. sfdksdfjsdöfljdsfdsfsdfkldsf skf
                            jslfjsldfjsdlfjlksdfjlsdjflsdfjkdslfjksdjflksdf jsdlkfjksdfjsdklfjksdfksdljfjlsdjflsdjkfjklsjklfslk "/>
                    </div>
                    </div>   
    )}



export default Display

