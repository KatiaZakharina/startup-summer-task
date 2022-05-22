import ReactPaginate from 'react-paginate';

import styled from 'styled-components';
import { BLUE, DARK_GRAY, WHITE } from 'styles/constant';

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: ${DARK_GRAY};
`;

export const CurrentItems = styled.span`
  font-weight: 600;
`;

export const StyledReactPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  list-style-type: none;

  li a {
    border-radius: 3px;
    padding: 0.3rem 0.4rem;
    margin: 0 0.3rem;
    cursor: pointer;
  }

  li.previous a,
  li.next a {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${BLUE};
  }

  li.active a {
    background-color: ${BLUE};
    border-color: transparent;
    color: ${WHITE};
  }

  li.disable,
  li.disabled a {
    color: ${DARK_GRAY};
    cursor: default;
  }
`;
