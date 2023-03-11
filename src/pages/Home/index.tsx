import { HomeContainer} from "./style";
import { Profile } from "./components/Profile";
import { SearchBarComponent } from "./components/SearchBar";
import { Post } from "./components/Post";


export function Home() {
  return (
    <HomeContainer>
      <Profile />
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