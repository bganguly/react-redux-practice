import { useState } from "react"
import CustomInput from "./CustomInput"

const ParentChildProps = () => {
  const [name, setName] = useState('')
  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <p>You entered : {name}</p>  
      <CustomInput onChange={onChange}/>    
    </>
  )
}

export default ParentChildProps