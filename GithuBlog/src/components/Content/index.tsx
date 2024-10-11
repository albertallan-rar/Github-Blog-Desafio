import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { useRepositoryContext } from "../../context/RepositoryContext";
import { Card } from "../Card";
import { ContentCardContainer, ContentContainer, ContentHeader } from "./styles";

export function Content() {
  const { issues, searchIssues, loading } = useRepositoryContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTextChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      searchIssues(event.target.value);
    }, 700),
    [searchIssues],
  );

  return (
    <ContentContainer>
      <ContentHeader>
        <span>Publicações</span>
        <p>{issues.length} publicações</p>
      </ContentHeader>
      <input type="text" placeholder="Buscar conteúdo" defaultValue={searchTerm} onChange={handleSearchTextChange} />
      <ContentCardContainer>
        {loading ? (
          <p>Carregando...</p>
        ) : issues.length > 0 ? (
          issues.map((issue) => (
            <Card key={issue.id} title={issue.title} description={issue.body} created_at={issue.created_at} />
          ))
        ) : (
          <p>Nenhuma publicação encontrada</p>
        )}
      </ContentCardContainer>
    </ContentContainer>
  );
}
