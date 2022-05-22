import { SpinnerWrapper } from 'components/helpers/Preloader/styled';
import styled from 'styled-components';

export const StyledRepositoriesInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-top: 1rem;

  ${SpinnerWrapper} {
    min-height: 200px;
  }
`;

export const RepositoryCount = styled.h2`
  margin: 1rem 0 2rem;
  font-size: 2rem;
`;
