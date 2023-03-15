import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  .posts {
    margin-top: 3rem;
    width: 100%;
    max-width: 54rem;

    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`
