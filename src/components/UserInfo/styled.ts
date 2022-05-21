import styled from 'styled-components';

import { BLUE } from 'styles/constant';

export const StyledUserInfo = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.3rem 3rem;
  flex-wrap: wrap;
  margin-top: 2.4rem;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Avatar = styled.img`
  width: 21vw;
  height: 21vw;
  max-width: 350px;
  max-height: 350px;
  min-width: 150px;
  min-height: 150px;
  border-radius: 20rem;
  object-fit: cover;
`;

export const UserName = styled.h1`
  margin-top: 0;
  font-size: 1.6rem;
`;

export const RepositoryName = styled.a`
  color: ${BLUE};
  text-decoration: none;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-top: 2rem;
  list-style: none;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div<{ bgImage: string }>`
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  background: url(${({ bgImage }) => bgImage}) center / cover no-repeat; ;
`;

export const Info = styled.span`
  margin-left: 6px;
  font-size: 1rem;
`;
