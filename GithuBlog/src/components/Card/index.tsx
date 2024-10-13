import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom"; // Importar o hook de navegação

import { CardContainer, CardDescription, CardHeader, CardTime, CardTitle } from "./styles";

interface CardProps {
  title: string;
  description: string;
  created_at: string;
  id: number; // Adicionar o id
}

export function Card({ title, description, created_at, id }: CardProps) {
  dayjs.locale("pt-br");
  dayjs.extend(relativeTime);

  const navigate = useNavigate(); // Instanciar o hook de navegação
  const publishedAt = dayjs(created_at);
  const timeFromNow = publishedAt.fromNow();

  // Função de clique para redirecionar
  const handleClick = () => {
    navigate(`/about/${id}`); // Redirecionar para a tela "about" com o id
  };

  return (
    <CardContainer onClick={handleClick} style={{ cursor: "pointer" }}>
      {" "}
      {/* Adicionar o onClick */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardTime>{timeFromNow}</CardTime>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}
