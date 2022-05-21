import { Spinner, SpinnerWrapper } from './styled';

export const Preloader = () => (
  <SpinnerWrapper data-testid="preloader">
    <Spinner />
    Loading...
  </SpinnerWrapper>
);
