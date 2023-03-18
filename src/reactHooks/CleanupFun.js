import React, { useEffect, useState } from 'react'

const CleanupFun = () => {

const [size , setNewSize] = useState(window.screen.width)

const actualSize = ()=>{
  setNewSize(window.innerWidth)
}

useEffect(()=>{
  window.addEventListener("resize" , actualSize)

  return() =>{
    window.removeEventListener("resize" , actualSize)
  }
})





  return (
    <div className='clean-box'>
    <p>this is our screen size .</p>
        <h1>{size}</h1>
    </div>
  )
}

export default CleanupFun