import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: calc(100vw - 82px);
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: calc(100vw - 20px);
  }
`;
