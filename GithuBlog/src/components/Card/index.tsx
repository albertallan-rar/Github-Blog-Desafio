import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

import { CardContainer, CardDescription, CardHeader, CardTime, CardTitle } from "./styles";

interface CardProps {
  title: string;
  description: string;
  created_at: string;
}

export function Card({ title, description, created_at }: CardProps) {
  dayjs.locale("pt-Br");
  dayjs.extend(relativeTime);

  const publishedAt = dayjs(created_at);
  const timeFromNow = publishedAt.fromNow();
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardTime>{timeFromNow}</CardTime>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}
