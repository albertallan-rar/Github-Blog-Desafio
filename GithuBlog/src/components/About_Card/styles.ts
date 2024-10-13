import styled from "styled-components";

export const AboutCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme["base-profile"]};

  padding: 1.5rem;
  border-radius: 10px;
`;

export const AboutCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 0.5rem 0;
`;

export const AboutCardContentHeader = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;

  gap: 2rem;
`;

export const AboutButtonHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

export const AboutBackButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;

  color: ${(props) => props.theme["blue"]};
`;

export const AboutCardGitHubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;

  text-decoration: none;
  color: ${(props) => props.theme["blue"]};
`;

export const AboutCardContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const AboutCardContentFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
