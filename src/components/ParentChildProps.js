import { useState } from "react"
import CustomInput from "./CustomInput"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  return (
    <>
      <CustomInput onChange={(e) => {setName(e.target.value)}}/>    
      <p>You entered : {name}</p>  
    </>
  )
}

export default ParentChildProps