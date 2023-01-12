import React from 'react'



function ScrollArrow(props) {

    function smoothScroll(e) {
          
        let scroll = document.getElementById(props.scrollTarget);
        e.preventDefault();  // Stop Page Reloading
        scroll && scroll.scrollIntoView({behavior:'smooth'});
    }

    return(

        <svg  onClick={smoothScroll} stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 16 16" class="divider__arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path 
         fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"></path></svg>
    )
}

export default ScrollArrow

//m 37 28 l 35 0
//M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z