import React, { useEffect, useState } from 'react'
import './IfoodCounter.css'

export default function IfoodCounter() {

  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

  useEffect(() => {
    document.getElementById('valor').innerHTML = 2 * value;
  }, [value])
  

  function down(){

    if(value <= 1){
      setButtonStyle('counter-button-minus-deactive')
    }
    
    if(value > 0){
      setValue(value - 1)
    }
  }
  
  function up(){
    setValue(value + 1)
    setButtonStyle('counter-button-minus-active')
  }

  return (
    <div className='counter-wrapper'>
      <button className={ buttonStyle } onClick={down}>-</button>
      <p>{ value }</p>
      <button className='counter-button-minus-active' onClick={up}>+</button>
      <button id='valor'>12</button>
    </div>
  )
}
