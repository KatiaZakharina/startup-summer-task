import { SearchState } from './SearchState';
import { UserInfo } from './UserInfo';
import { RepositoriesInfo } from './RepositoriesInfo';
import { ErrorHandler } from 'components/helpers/ErrorHandler';
import { LoadingWrapper } from 'components/helpers/LoadingWrapper';
import { Main, SearchContainer } from './styled';
import { useAppSelector } from 'store/hooks';

export const MainPage = () => {
  const result = useAppSelector((state) => state.searchReducer.result);
  const { errorMessage, userIsLoading } = useAppSelector((state) => state.searchReducer);

  return (
    <ErrorHandler message={errorMessage}>
      <LoadingWrapper isLoading={userIsLoading}>
        <Main>
          {!result ? (
            <SearchState searchResult="initial_search" />
          ) : (
            <SearchContainer>
              {!result?.user ? (
                <SearchState searchResult="user_not_found" />
              ) : (
                <>
                  <UserInfo />
                  <RepositoriesInfo />
                </>
              )}
            </SearchContainer>
          )}
        </Main>
      </LoadingWrapper>
    </ErrorHandler>
  );
};
