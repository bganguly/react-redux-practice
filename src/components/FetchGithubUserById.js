import { useState, useEffect } from "react";
import GithubUser from "./GithubUser";

const FetchGithubUserById = ({githubId}) => {
  // initialise view with default 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let getData = () => {
    setLoading(true)
    // login is github handle- such as eveporcello or bnaguly etc
    fetch(`https://api.github.com/users/${githubId}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading (false))
    .catch(setError)
  }

  // useffect is the combination of componentdidmount/willunmount etc
  // and guaranteed to run _after_ render
  useEffect(() => {
    getData()
  },[githubId])

  if (loading) return <h1> Loading.. </h1>
  if (error) return <pre> {JSON.stringify(error,null,2)}</pre>
  if (!data || !data.login) return <p> User not found </p>
  
  return <GithubUser user={data}/>

}

export default FetchGithubUserById;