import { Logo, Search, StyledHeader } from './styled';
import { Container } from '../layout/Containers';

import gitHubLogo from 'assets/svg/github_logo.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo src={gitHubLogo} alt="github logotype" />
        <Search placeholder="Enter GitHub username" name="username" />
      </Container>
    </StyledHeader>
  );
};
