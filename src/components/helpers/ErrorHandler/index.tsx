import { ReactElement } from 'react';

import { ErrorDescription, ErrorImg, Message, StyledErrorSection } from './styled';
import error from 'assets/svg/error.svg';

type ErrorSectionProps = { message?: string; children: ReactElement };

export function ErrorHandler({ message, children }: ErrorSectionProps) {
  return message ? (
    <StyledErrorSection>
      <ErrorImg src={error} />
      <ErrorDescription>
        <Message>{message}</Message>
      </ErrorDescription>
    </StyledErrorSection>
  ) : (
    children
  );
}
