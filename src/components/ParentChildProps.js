import { useState } from "react"
import CustomInput from "./CustomInput"
import CustomPara from "./CustomPara"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  return (
    <>
      <CustomInput onChange={(e) => {setName(e.target.value)}}/>    
      <CustomPara name={name}/>
    </>
  )
}

export default ParentChildProps