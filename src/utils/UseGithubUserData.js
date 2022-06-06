import { useState, useEffect } from "react";

const useGithubUserData = ({githubId}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useffect is the combination of componentdidmount/willunmount etc
  // and guaranteed to run exactly once _after_ render
  useEffect(() => {
    const getData = () => {
      setLoading(true)
      // githubid is github handle - such as eveporcello or bganguly or gaearon etc
      fetch(`https://api.github.com/users/${githubId}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading (false))
      .catch(setError)
    }
    getData()
  },[githubId])

  return {loading, error, data}
}

export default useGithubUserData