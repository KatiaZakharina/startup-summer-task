import styled from 'styled-components';

import { DARK_GRAY } from 'styles/constant';

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 210px;
  padding-bottom: 100px;
  text-align: center;
`;

export const Icon = styled.img`
  width: 7rem;
  height: 7rem;
  margin-bottom: 1.5rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  line-height: 140%;
  color: ${DARK_GRAY};
`;
