import { RepositoryCard } from 'pages/MainPage/RepositoryCard';
import { RepositoryList } from './styled';
import { useAppSelector } from 'store/hooks';

export const RepositoriesList = () => {
  const repos = useAppSelector((state) => state.searchReducer.result?.repos);

  return (
    <RepositoryList>
      {repos &&
        repos.map((item, index) => (
          <RepositoryCard
            key={index}
            name={item.name}
            description={item.description}
            link={item.html_url}
          />
        ))}
    </RepositoryList>
  );
};
