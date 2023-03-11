import styled from "styled-components";

export const ProfileContainer = styled.header`
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileBanner = styled.div`
  width: 54rem;
  padding: 2rem;
  background: ${props => props.theme['base-profile']};

  display: flex;
  border-radius: 10px;
  margin-top: -5.625rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  gap: 2rem;

  .avatar {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    .container{
      div {
      display: flex;
      justify-content: space-between;

      h2 {
        font-weight: bold;
        color: ${props => props.theme['base-title']};
        margin-bottom: 0.5rem;
      }

    }
  }

  .infos {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}
`