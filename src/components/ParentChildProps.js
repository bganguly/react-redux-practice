import { useState } from "react"
import CustomInput from "./CustomInput"
import FetchGithubUserById from "./FetchGithubUserById"

import  "./ParentChildProps.css"

const ParentChildProps = () => {
  const [githubId, setGithubId] = useState('')
  const onBlur = (e) => {
    setGithubId(e.target.value)
  }

  return (
    <div className="sideBySide">
      <CustomInput onBlur={onBlur}/>    
      { typeof githubId !== 'undefined' 
        && githubId !== '' 
        &&  <FetchGithubUserById githubId={githubId}/>}
    </div>
  )
}

export default ParentChildProps