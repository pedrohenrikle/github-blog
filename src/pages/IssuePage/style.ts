import styled from 'styled-components'

export const IssuePageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

export const IssueHeader = styled.header`
  width: 54rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: -5.625rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  gap: 2rem;

  .links {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  section {
    .name {
      h2 {
        color: ${(props) => props.theme['base-title']};
        width: 100%;
        word-wrap: break-word;
        line-height: 160%;
      }
    }

    .infos {
      display: flex;
      gap: 2rem;
      margin-top: 0.5rem;

      .info-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 100%;
      }
    }
  }
`

export const IssueContent = styled.div`
  width: 100%;
  max-width: 54rem;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  text-align: justify;

  .react-markdown {
    white-space: 'pre-wrap';
    line-height: 1.6;
    hyphens: 'auto';

    a {
      color: ${(props) => props.theme['base-subtitle']};
      text-decoration: none;
      font-weight: bold;

      &:hover {
        color: ${(props) => props.theme['base-span']};
        transition: color 0.3s;
      }
    }
  }
`
