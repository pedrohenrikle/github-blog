import styled from "styled-components";


export const PostContainer = styled.article`
  padding: 2rem;
  height: 16.25rem;
  background: ${props => props.theme['base-post']};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1.125rem;
  border-radius: 10px;

  
  .content {
    overflow: hidden;
    padding-bottom: 2rem; /* ou o valor que desejar */


    p {
      color: ${props => props.theme['base-text']};
    }
  }

  .headerPost {
    display: flex;
    gap: 1rem;

    h2 {
      flex: 70%;
      font-weight: bold;
      font-size: 1.25rem;
      color: ${props => props.theme['base-title']};      
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
      text-decoration: none;

      &:link, &:visited { text-decoration: none;}
    }
  }

  &:hover {
    transition: box-shadow 0.2s;
    box-shadow: 0 0 0 2px ${props => props.theme['base-label']};
  }

`