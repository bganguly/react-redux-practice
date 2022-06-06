// import { useState, useEffect } from "react";
import useGithubUserData from "./UseGithubUserData";
import GithubUser from "./GithubUser";

const FetchGithubUserById = ({githubId}) => {
  const response = useGithubUserData({githubId});  

  if (response.loading) return <h2> Loading.. </h2>
  if (response.error) return <pre> {JSON.stringify(response.error,null,2)}</pre>
  if (!response.data || !response.data.login) return <p> User not found </p>

  return <GithubUser user={response.data}/>
}

export default FetchGithubUserById;