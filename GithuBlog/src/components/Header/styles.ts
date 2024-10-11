import styled from "styled-components";
import background_header from "../../assets/background_header.svg";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background_header});
  background-size: cover;
  height: 18.5rem;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;

  img {
    margin-bottom: 5rem;
    width: 148px;
    height: 98px;
  }
`;
