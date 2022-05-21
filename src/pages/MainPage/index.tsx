import { Header } from 'components/Header';
import { EmptySearchResult } from 'components/EmptySearchResult';
import { UserInfo } from 'components/UserInfo';
import { Main, SearchContainer } from './styled';
import { useAppSelector } from 'store/hooks';
import { RepositoryCount, StyledRepositoriesInfo } from './RepositoriesInfo/styled';
import { RepositoriesInfo } from './RepositoriesInfo';
import { ErrorHandler } from 'components/helpers/ErrorHandler';
import { Preloader } from 'components/helpers/Preloader';

export const MainPage = () => {
  const result = useAppSelector((state) => state.searchReducer.result);
  const { errorMessage, isLoading } = useAppSelector((state) => state.searchReducer);

  return (
    <>
      <Header />
      <ErrorHandler message={errorMessage}>
        {isLoading ? (
          <Preloader />
        ) : (
          <Main>
            {!result ? (
              <EmptySearchResult searchResult="empty_search" />
            ) : (
              <SearchContainer>
                {!result?.user ? (
                  <EmptySearchResult searchResult="empty_user" />
                ) : (
                  <>
                    <UserInfo />

                    {!result?.repos?.length ? (
                      <EmptySearchResult searchResult="empty_repository_list" />
                    ) : (
                      <StyledRepositoriesInfo>
                        <RepositoryCount>Repositories ({result.repos.length})</RepositoryCount>
                        <RepositoriesInfo itemsPerPage={4} />
                      </StyledRepositoriesInfo>
                    )}
                  </>
                )}
              </SearchContainer>
            )}
          </Main>
        )}
      </ErrorHandler>
    </>
  );
};
