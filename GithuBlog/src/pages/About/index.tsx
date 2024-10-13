"useEffect";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { About_Card } from "../../components/About_Card";
import { useIssueDetails } from "../../context/IssuesDetailsContext";
import { AboutBody, AboutContainer } from "./styles";
export default function About() {
  const { fetchIssueDetails, issueDetails, loading, error } = useIssueDetails();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchIssueDetails(Number(id));
    }
  }, [id, fetchIssueDetails]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!issueDetails) return;

  return (
    <AboutContainer>
      {!issueDetails ? (
        <div>Issue não encontrada</div>
      ) : (
        <div>
          <About_Card
            title={issueDetails.title}
            repo_url={issueDetails.html_url}
            userName={issueDetails.user.login}
            createdAt={issueDetails.created_at}
            comments={issueDetails.comments}
          />

          <AboutBody>{issueDetails.body}</AboutBody>
        </div>
      )}
    </AboutContainer>
  );
}
