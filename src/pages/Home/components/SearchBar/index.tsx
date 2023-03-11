import { SearchBar, SearchBarContainer } from "./style";

export function SearchBarComponent() {
  return (
    <SearchBarContainer>
      <div className="header">
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>
      <form className="main">
        <SearchBar placeholder="Buscar conteúdo" />
      </form>
    </SearchBarContainer>
  )
}