import { useState } from "react"
import CustomInput from "./CustomInput"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <CustomInput onChange={onChange}/>    
      <p>You entered : {name}</p>  
    </>
  )
}

export default ParentChildProps