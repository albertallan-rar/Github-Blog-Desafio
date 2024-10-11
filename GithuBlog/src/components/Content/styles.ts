import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 160%;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border-color: ${(props) => props.theme["blue"]};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const ContentCardContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
