import { useState } from "react"

export default function SmartCounter(){

  const [quantity, setQuantity] = useState(10);



  return(
    <>
      <h1>{ quantity }</h1>
      <button onClick={() => setQuantity(quantity + 1)}>Aumentar</button>
    </>
  )
}