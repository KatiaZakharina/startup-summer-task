import { Name, StyledRepositoryCard } from './styled';

type Props = {
  name: string;
  description: string;
};

export const RepositoryCard = ({ name, description }: Props) => {
  return (
    <StyledRepositoryCard>
      <Name>{name}</Name>
      <p>{description}</p>
    </StyledRepositoryCard>
  );
};
