import { ExternalLink } from "lucide-react";
import { CompanyIcon } from "../../assets/icons/CompanyIcon";
import { FollowersIcon } from "../../assets/icons/FollowersIcon";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { useRepositoryContext } from "../../context/RepositoryContext";
import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardContentFooter,
  ProfileCardContentFooterItem,
  ProfileCardContentHeader,
  ProfileCardGitHubLink,
} from "./styles";

export function Profile_Card() {
  const { userData } = useRepositoryContext();

  return (
    <ProfileCardContainer>
      <img src={userData?.avatar_url} alt="" />
      <ProfileCardContent>
        <ProfileCardContentHeader>
          <span>{userData?.name}</span>
          <ProfileCardGitHubLink href={userData?.html_url} target="_blank">
            <span>GITHUB</span>
            <ExternalLink size={14} />
          </ProfileCardGitHubLink>
        </ProfileCardContentHeader>
        <span>{userData?.bio}</span>

        <ProfileCardContentFooter>
          <ProfileCardContentFooterItem>
            <GithubIcon size={16} />
            {userData?.login}
          </ProfileCardContentFooterItem>
          <ProfileCardContentFooterItem>
            <CompanyIcon size={16} />
            Qodeless
          </ProfileCardContentFooterItem>
          <ProfileCardContentFooterItem>
            <FollowersIcon size={16} />
            {userData?.followers} seguidores
          </ProfileCardContentFooterItem>
        </ProfileCardContentFooter>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
}
