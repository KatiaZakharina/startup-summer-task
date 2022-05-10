import styled from 'styled-components';

import { LIGHT_GRAY } from 'styles/constant';
import { Container } from 'components/layout/Containers';
import { StyledResult } from 'components/EmptySearchResult/styled';

export const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  background-color: ${LIGHT_GRAY};
`;

export const SearchContainer = styled(Container)`
  align-items: flex-start;
  justify-content: space-between;
  gap: 2.5rem 87px;
  padding: 0 15px;

  ${StyledResult} {
    align-self: center;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
