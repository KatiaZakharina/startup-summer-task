import styled from 'styled-components';

import { BLUE, WHITE } from 'styles/constant';
import searchIcon from 'assets/svg/search.svg';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  background-color: ${BLUE};
`;

export const Logo = styled.img`
  width: 41px;
  height: 40px;
  margin-right: 22px;
`;

export const Search = styled.input.attrs({ type: 'search' })`
  width: calc(85vw - 63px);
  max-width: 500px;
  padding: 0.8rem 1rem 0.8rem 2.8rem;
  font-size: 0.8rem;
  border: 0;
  border-radius: 6px;
  background: url(${searchIcon}) ${WHITE} no-repeat;
  background-position: bottom 50% left 10px;
  background-size: 2rem 2rem;

  &::-webkit-search-cancel-button {
    appearance: none;
  }
`;
