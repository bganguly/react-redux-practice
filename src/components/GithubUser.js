const GithubUser = ({user}) => {
  return (
    <div>
      <a target='_blank' rel='noreferrer' href={user.html_url}>
        {user.login}'s github link
      </a>
      {
        user.avatar_url
        ? <p>
            <img src={user.avatar_url} 
              alt="not provided" 
              width="200"
              height="200"
            />
          </p>
        : null
      }
    </div>
  )
}

export default GithubUser