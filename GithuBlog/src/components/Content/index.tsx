import { useRepositoryContext } from "../../context/RepositoryContext";
import { Card } from "../Card";
import { ContentCardContainer, ContentContainer, ContentHeader } from "./styles";

export function Content() {
  const { issues } = useRepositoryContext();

  return (
    <ContentContainer>
      <ContentHeader>
        <span>Publicações</span>
        <p>{issues.length} publicações</p>
      </ContentHeader>
      <input type="text" placeholder="Buscar conteúdo" />
      <ContentCardContainer>
        {issues.map((issue) => (
          <Card key={issue.id} title={issue.title} description={issue.body} created_at={issue.created_at} />
        ))}
      </ContentCardContainer>
    </ContentContainer>
  );
}
