import { SearchState } from '../SearchState';
import { RepositoriesList } from './RepositoriesList';
import { ReposPagination } from './ReposPagination';
import { LoadingWrapper } from 'components/helpers/LoadingWrapper';
import { RepositoryCount, StyledRepositoriesInfo } from './styled';
import { useAppSelector } from 'store/hooks';

export const RepositoriesInfo = () => {
  const reposNum = useAppSelector((state) => state.searchReducer.result?.user?.public_repos) || 0;
  const { reposIsLoading } = useAppSelector((state) => state.searchReducer);

  return !reposNum ? (
    <SearchState searchResult="empty_repository_list" />
  ) : (
    <StyledRepositoriesInfo>
      <RepositoryCount>Repositories ({reposNum})</RepositoryCount>

      <LoadingWrapper isLoading={reposIsLoading}>
        <>
          <RepositoriesList />
          <ReposPagination />
        </>
      </LoadingWrapper>
    </StyledRepositoriesInfo>
  );
};
