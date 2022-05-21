import styled from 'styled-components';

import { BLUE, WHITE } from 'styles/constant';

export const StyledRepositoryCard = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${WHITE};
`;

export const Name = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${BLUE};
  text-decoration: none;
`;
