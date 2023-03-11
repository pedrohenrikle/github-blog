import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 54rem;
  margin-top: 4.2rem;

  .header {
    display: flex;
    justify-content: space-between;

    p {
      color: ${props => props.theme['base-subtitle']};
      font-weight: bold;
      font-size: 1.125rem;
    }

    span {
      color: ${props => props.theme['base-label']};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export const SearchBar = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: ${props => props.theme['base-text']};

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`