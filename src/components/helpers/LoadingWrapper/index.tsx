import { ReactElement } from 'react';

import { Preloader } from '../Preloader';

type Props = { children: ReactElement; isLoading: boolean };

export const LoadingWrapper = ({ children, isLoading }: Props) => {
  return isLoading ? <Preloader /> : children;
};
