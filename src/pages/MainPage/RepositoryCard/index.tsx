import { Name, StyledRepositoryCard } from './styled';

type Props = {
  name: string;
  description: string;
  link: string;
};

export const RepositoryCard = ({ name, description, link }: Props) => {
  return (
    <StyledRepositoryCard>
      <Name href={link} target="_blank">
        {name}
      </Name>
      <p>{description}</p>
    </StyledRepositoryCard>
  );
};
