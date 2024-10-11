import logo from "../../assets/logo.png";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  );
}
