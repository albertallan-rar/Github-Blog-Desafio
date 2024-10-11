import { Content } from "../../components/Content";
import { Profile_Card } from "../../components/Profile_Card";
import { RepositoryProvider } from "../../context/RepositoryContext";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <RepositoryProvider>
        <Profile_Card />
        <Content />
      </RepositoryProvider>
    </HomeContainer>
  );
}
