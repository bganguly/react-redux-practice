import { useState } from "react"
import CustomDiv from "./CustomDiv"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  return (
    <>
      <input  
          placeholder="enter a name"
          onChange={(e) => {setName(e.target.value)}}
        />
      <CustomDiv name={name}/>
    </>
  )
}

export default ParentChildProps