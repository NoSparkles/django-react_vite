import React from 'react'
import Hello from './components/Hello'
import image from './images/download.jpg'
import image2 from './images/download2.jpg'

function App() {
    return(
      <>
        <Hello name="false"></Hello>
        <img src={image} alt="" />
        <img src={image2} alt="" />
      </>
    )
}

export default App
