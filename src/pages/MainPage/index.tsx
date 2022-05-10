import { Header } from 'components/Header';
import { EmptySearchResult } from 'components/EmptySearchResult';
import { UserInfo } from 'components/UserInfo';
import { Main, SearchContainer } from './styled';
import { RepositoriesInfo } from 'pages/MainPage/RepositoriesInfo';

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        {false ? (
          <EmptySearchResult searchResult="empty_search" />
        ) : (
          <SearchContainer>
            {false ? (
              <EmptySearchResult searchResult="empty_user_list" />
            ) : (
              <>
                <UserInfo />

                {true ? (
                  <EmptySearchResult searchResult="empty_repository_list" />
                ) : (
                  <RepositoriesInfo itemsPerPage={4} />
                )}
              </>
            )}
          </SearchContainer>
        )}
      </Main>
    </>
  );
};
