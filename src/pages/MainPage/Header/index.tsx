import { ChangeEvent, FormEvent } from 'react';

import { Logo, Search, StyledHeader } from './styled';
import { Container } from 'components/layout/Containers';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changePage, changeSearch, fetchReposData, fetchUserData } from 'store/search/searchSlice';

import gitHubLogo from 'assets/svg/github_logo.svg';

export const Header = () => {
  const search = useAppSelector((state) => state.searchReducer.query);
  const dispatch = useAppDispatch();

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(event.target.value));
  };

  const onSearchRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userResponse = await dispatch(fetchUserData(search));

    dispatch(changePage(1));
    if (userResponse.meta.requestStatus !== 'rejected') {
      dispatch(fetchReposData({ userName: search, page: 1 }));
    }
  };

  return (
    <StyledHeader>
      <Container>
        <Logo src={gitHubLogo} alt="github logotype" />

        <form onSubmit={onSearchRequest}>
          <Search
            placeholder="Enter GitHub username"
            name="username"
            value={search}
            onChange={onSearchChange}
            autoComplete="off"
          />
        </form>
      </Container>
    </StyledHeader>
  );
};
