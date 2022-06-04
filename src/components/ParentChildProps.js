import { useState } from "react"
import Customh1 from "./Customh1"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  return (
    <>
      <input  
          placeholder="enter a name"
          onChange={(e) => {setName(e.target.value)}}
        />
      <Customh1 name={name}/>
    </>
  )
}

export default ParentChildProps