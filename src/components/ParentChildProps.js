import { useState } from "react"
import CustomInput from "./CustomInput"
import CustomPara from "./CustomPara"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <CustomInput onChange={onChange}/>    
      <CustomPara name={name}/>
    </>
  )
}

export default ParentChildProps