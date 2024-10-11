import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};

  span {
    font-size: 1.25rem;
  }
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  justify-content: space-between;
`;

export const CardTitle = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme["base-title"]};
  line-height: 160%;
  width: 100%;
`;

export const CardTime = styled.time`
  display: flex;
  justify-content: end;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-span"]};
  width: 100%;
  padding: 0.25rem 0.5rem;
`;
export const CardDescription = styled.p`
  margin-top: 1.25rem;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
