import { useState } from "react"
import CustomInput from "./CustomInput"
import CustomPara from "./CustomPara"

import  "./ParentChildProps.css"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="sideBySide">
      <CustomInput onChange={onChange}/>    
      <CustomPara name={name}/>
    </div>
  )
}

export default ParentChildProps