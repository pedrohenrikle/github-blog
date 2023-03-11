import { HomeContainer, ProfileBanner } from "./style";
import banner from '../../assets/banner.svg'
import { CustomLink } from "../../utilities/CustomLink";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";


export function Home() {
  return (
    <HomeContainer>
      <img src={banner} alt="" />
      <ProfileBanner>
        <img className="avatar" src='https://github.com/pedrohenrikle.png' alt="" />
        <section className="content">
        <div className="container">
          <div>
            <h2>Pedro Herique</h2>
            <CustomLink 
              href='https://github.com/pedrohenrikle' 
              target='_blank' >
                GITHUB 
                <ArrowSquareOut size={12} weight={"bold"}/>
            </CustomLink>
          </div>
          <p>A young web developer. 19 years old. Mechanic Associate Degree ⚙️</p>
        </div>

          <div className='infos'>
            <section><GithubLogo size={18} color={'#3A536B'} weight={'bold'}/> <span>pedrohenrikle</span></section>
            <section><Buildings size={18} color={'#3A536B'} weight={'bold'}/> <span>Rocketseat</span></section>
            <section><Users size={18} color={'#3A536B'} weight={'bold'}/> <span>32</span> seguidores</section>
          </div>
        </section>
      </ProfileBanner>
    </HomeContainer>
  )
}