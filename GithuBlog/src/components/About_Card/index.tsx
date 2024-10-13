"use client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CalendarDays, ChevronLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FollowersIcon } from "../../assets/icons/FollowersIcon";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import {
  AboutBackButton,
  AboutButtonHeaderContent,
  AboutCardContainer,
  AboutCardContent,
  AboutCardContentFooter,
  AboutCardContentFooterItem,
  AboutCardContentHeader,
  AboutCardGitHubLink,
} from "./styles";

interface AboutCardProps {
  createdAt: string;
  repo_url: string;
  comments: number;
  userName: string;
  title: string;
}

export function About_Card({ comments, userName, title, createdAt, repo_url }: AboutCardProps) {
  const navigate = useNavigate();

  dayjs.locale("pt-br");
  dayjs.extend(relativeTime);

  const publishedAt = dayjs(createdAt);
  const timeFromNow = publishedAt.fromNow();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <AboutCardContainer>
      <AboutCardContent>
        <AboutCardContentHeader>
          <AboutButtonHeaderContent>
            <AboutBackButton onClick={handleGoBack}>
              <ChevronLeft /> <span>Voltar</span>
            </AboutBackButton>
            <AboutCardGitHubLink href={repo_url} target="_blank">
              <span>Ver no Github</span>
              <ExternalLink size={14} />
            </AboutCardGitHubLink>
          </AboutButtonHeaderContent>
          <h1>{title}</h1>
        </AboutCardContentHeader>

        <AboutCardContentFooter>
          <AboutCardContentFooterItem>
            <GithubIcon size={16} />
            {userName}
          </AboutCardContentFooterItem>
          <AboutCardContentFooterItem>
            <CalendarDays size={16} />
            {timeFromNow}
          </AboutCardContentFooterItem>
          <AboutCardContentFooterItem>
            <FollowersIcon size={16} />
            {comments} comentários
          </AboutCardContentFooterItem>
        </AboutCardContentFooter>
      </AboutCardContent>
    </AboutCardContainer>
  );
}
