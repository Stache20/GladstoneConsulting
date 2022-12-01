import React, {useEffect, useState} from 'react'
import Display from './Display'


function App() {

  /*

const [backendData, setBackendData] = useState([{}])

useEffect(()=> {
  fetch("/api").then(
    response=> response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])
*/


  return (
    <div>
    <Display/>
    </div>
  )
}

export default App


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