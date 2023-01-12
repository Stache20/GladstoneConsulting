import React from 'react';


function ServiceDisplay(props) {
    return (

<div class="col-md-6 how-img ">
    <img 
   
    className='col-md-6 how-img serviceImg'
     src={props.image} 
     alt='Services_img' 
     height='100 px' 
     width='50px' />
    </div>
    )
}

export default ServiceDisplay;


