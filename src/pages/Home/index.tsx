import { HomeContainer} from "./style";
import { Profile } from "./components/Profile";
import { SearchBarComponent } from "./components/SearchBar";
import { Post } from "./components/Post";
import { userAPI } from "../../lib/axios";
import { useEffect, useState } from "react";

interface ProfileProps {
  name: string
  login: string
  bio: string
  followers: string
  avatar_url: string
  html_url: string
}

export function Home() {
  const [userData, setUserData] = useState<ProfileProps[]>([]);

  useEffect(() => {  
    userAPI.get('pedrohenrikle')
      .then(response => {
        const data = response.data;
        setUserData([data]);
      })
  }, []);

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
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </HomeContainer>
  )
}