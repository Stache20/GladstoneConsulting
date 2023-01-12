import React from 'react'


function ServicesContent(props) {



    return (
        
        <div class="col-md-6">
            <h2>{props.header}</h2>
      <span> <p class="text-muted">{props.text}<span onClick={() => props.moreClicked(props.header)} class="text-muted link-services"></span></p></span>
        </div>
    

    )
}

export default ServicesContent

//.attr('maxlength','10')