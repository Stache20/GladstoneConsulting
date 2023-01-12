import React , {useEffect, useState}  from 'react'
import ScrollArrow from './ScrollArrow'
import ServiceDisplay from './ServiceDisplay'
import ServicesContent from './ServicesContent'




function Service() {


    return(

        <div id='Service' class="box ">
                    <div  class="row">
                       
                            <ServiceDisplay image={require('../images/pexels-cottonbro-studio-4098228.jpg')}/>
                            <ServicesContent  header="Transition Planning" text="Marni has extensive experience creating and supporting folks with transition plans. She will meet with the team and build a feasible strengths based transition plan for the individual, team and family. She has experience writing transition plans for many different transitions such as but not limited to: 
Forensic Psychiatric Hospitals to the community, Secondary to Post-Secondary school, Supported living to independent living, Home living to Supported living.

This service is available in both Vancouver and Toronto. 
 " link='/Transition-Planning'/>
                       
                    </div>
                    <div class="row">
                         <ServicesContent  header="BCBA Supervision" text="Marni offers extremely comprehensive and supportive supervision for folks looking to acquire their supervision hours. This is a great option for those looking to get supervision in the forensic field.

Marni has the ability to take on trainees and supervisees across Canada for this. However, priority will be given to those living in Vancouver and Toronto. " link='/Supervision' />
                        
                        <ServiceDisplay image={require('../images/pexels-cottonbro-studio-4098369.jpg')} />
                    
                        
                    </div>
                    <div class="row">
                        
                        <ServiceDisplay image={require('../images/pexels-lisa-fotios-1655329.jpg')}/>            
                         <ServicesContent header="BCBA Exam Tutoring" text="Marni worked extremely hard to finish her masters in Special Education and ABA with an overall average of 99%. She was also able to pass her BCBA exam on the first try and would love to help other aspiring BCBAs feel confident and full of knowledge going into their exam or courses so she offers comprehensive tutoring and study plans. For virtual tutoring Marni can take on clients from anywhere in the world.
 "/>
                    </div>
                    <div class="row">
                        
                    
                        
                         <ServicesContent header="Social Skills Groups" text="Marni and some of her colleagues are offering a comprehensive social skills program for youth requiring additional support in social and relational skills.

Currently, this service is only being offered in Vancouver.
 "/>
 <ServiceDisplay image={require('../images/pexel1.jpg')}/>
                        
                    </div>
<div class='row'>
                    <ServiceDisplay image={require('../images/pexel2.jpg')}/>
                    <ServicesContent header="Consultation" text="Marni is available to consult on cases as part of an interdisciplinary team. She has experience working with folks of all ages, levels of need and severity of behaviours. For consultative services, Marni will meet with the team and provide suggestions and on-going support. 

Marni has the ability to take on clients across Canada for this. However, priority will be given to those living in Vancouver and Toronto.
 "/>
 
     
                    </div>
                    <div class='row'>
                    
                    <ServicesContent header="Functional Living Skills Training" text="Marni has lots of experience teaching independence and functional living skills to children, youth and adults. If you're looking for specialized functional living skills programming to improve independence such as: making the bed, doing laundry, washing dishes, ordering at restaurants, etc. this is a great service!
 "/>
 <ServiceDisplay image={require('../images/pexel3.jpg')}/>
     
                    </div>

                    <div class='row'>
                    <ServiceDisplay image={require('../images/pexel5.jpg')}/>
                    <ServicesContent header="Direct Service" text="Marni has the ability to take on a limited number of direct service clients in both Vancouver and Toronto. This includes but is not limited to: Functional Behaviour Assessment or Curriculum based assessment, Behaviour Support Plan development, caregiver training, IT/BI training, and ongoing supervision of programming.

 "/>
     
                    </div>

                    <div class='row'>
                    <ServicesContent header="One-Time Consultation" text="Have a quick question? Need help with a specific routine or behaviour? Need a fresh set of eyes to review a report? Marni offers some one time consultation calls/appointments.

Marni has the ability to take on clients across Canada for this. However, priority will be given to those living in Vancouver, Toronto, or rural areas. Though sliding scale and financial assistance is available for all services Marni provides, for this service, priority will also be given to those who typically struggle to afford services like these. .

 "/>
     <ServiceDisplay image={require('../images/pexel6.jpg')}/>
                    </div>












                    <div className='serviceSpace'>    
                    <hr
   style={{
   background: "grey",
   height: "2px",
   width: '40%',
   border: "none",
   }}
/>
<ScrollArrow/>
</div>
                    </div>   
    )}



export default Service

