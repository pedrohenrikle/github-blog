import { HomeContainer } from './style'
import { Profile } from './components/Profile'
import { SearchBarComponent } from './components/SearchBar'
import { Post } from './components/Post'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssuesContext'
import { Link } from 'react-router-dom'

export function Home() {
  const { userData, issues } = useContext(IssuesContext)

  console.log(issues)
  return (
    <HomeContainer>
      {userData.length > 0 && (
        <Profile
          name={userData[0].name}
          avatar_url={userData[0].avatar_url}
          bio={userData[0].bio}
          followers={userData[0].followers}
          login={userData[0].login}
          html_url={userData[0].html_url}
        />
      )}
      <SearchBarComponent />
      <div className="posts">
        {issues.length === 0 ? (
          <p>Nenhum resultado encontrado</p>
        ) : (
          issues.map((issue) => {
            return (
              <Link
                key={issue.id}
                to={`/issues/${issue.number}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Post
                  uploadedAt={issue.updated_at}
                  title={issue.title}
                  content={issue.body}
                />
              </Link>
            )
          })
        )}
      </div>
    </HomeContainer>
  )
}
