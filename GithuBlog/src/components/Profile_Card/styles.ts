import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme["base-profile"]};

  padding: 1.5rem;
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
    margin: auto;
  }
`;

export const ProfileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  padding: 0.5rem 0;
`;

export const ProfileCardContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProfileCardGitHubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;

  text-decoration: none;
  color: ${(props) => props.theme["blue"]};
`;

export const ProfileCardContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ProfileCardContentFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
