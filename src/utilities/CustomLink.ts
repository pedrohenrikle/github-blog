import styled from "styled-components";

export const CustomLink = styled.a`
  color: ${props => props.theme['blue']};
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  height: auto;
  gap: 0.5rem;
  align-items: baseline;
  text-decoration: none;
  margin-top: 2px solid transparent;
  margin-bottom: 2px solid transparent;

  &:hover, &:focus, &:active {
    margin: 1px solid #fff;
  }

`