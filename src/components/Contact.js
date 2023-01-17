import React from "react";


function Contact(){

    return(
<div id='Contact'>
        <div id='Contact' className='box text-center'>
        <div>
<h1>Get in touch</h1>
<p>We are available by call, text or email</p>
        </div>

    <div className="">
   <a href="mailto:marniraquel@gmail.com?subject=Gladstone Consulting"><i class="contactIcons fas fa-2xl fa-envelope"></i></a>
   <a href="tel:647-964-8895"><i class="contactIcons fas fa-2xl fa-phone"></i></a>
   <a href="sms:647-964-8895"><i class="contactIcons fas fa-2xl fa-comment-sms"></i></a>

    </div>
    </div>
    </div>
    )
}
export default Contact