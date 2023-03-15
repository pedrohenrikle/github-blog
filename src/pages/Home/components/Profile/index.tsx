import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { CustomLink } from '../../../../utilities/CustomLink'
import { ProfileBanner, ProfileContainer } from './style'
import banner from '../../../../assets/banner.svg'

interface ProfileProps {
  name: string
  login: string
  bio: string
  followers: string
  avatar_url: string
  html_url: string
}

export function Profile({
  name,
  avatar_url,
  bio,
  followers,
  login,
  html_url,
}: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={banner} alt="" />
      <ProfileBanner>
        <img className="avatar" src={avatar_url} alt="" />
        <section className="content">
          <div className="container">
            <div>
              <h2>{name}</h2>
              <CustomLink href={html_url} target="_blank">
                GITHUB
                <ArrowSquareOut size={12} weight={'bold'} />
              </CustomLink>
            </div>
            <p>{bio}</p>
          </div>

          <div className="infos">
            <section>
              <GithubLogo size={18} color={'#3A536B'} weight={'bold'} />
              <span>{login}</span>
            </section>
            <section>
              <Buildings size={18} color={'#3A536B'} weight={'bold'} />
              <span>Rocketseat</span>
            </section>
            <section>
              <Users size={18} color={'#3A536B'} weight={'bold'} />
              <span>{followers}</span> seguidores
            </section>
          </div>
        </section>
      </ProfileBanner>
    </ProfileContainer>
  )
}
