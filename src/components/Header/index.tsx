import { ChangeEvent, FormEvent } from 'react';

import { Logo, Search, StyledHeader } from './styled';
import { Container } from '../layout/Containers';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changeSearch, fetchUserData } from 'store/search/searchSlice';

import gitHubLogo from 'assets/svg/github_logo.svg';

export const Header = () => {
  const search = useAppSelector((state) => state.searchReducer.query);
  const dispatch = useAppDispatch();

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(event.target.value));
  };

  const onSearchRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchUserData(search));
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
          />
        </form>
      </Container>
    </StyledHeader>
  );
};
