import { Icon, Message, StyledDetails, StyledResult } from './styled';

import searchIcon from 'assets/svg/search.svg';
import userIcon from 'assets/svg/user.svg';
import crossIcon from 'assets/svg/rep.svg';

type SearchResult = 'initial_search' | 'user_not_found' | 'empty_repository_list';

type Props = {
  searchResult: SearchResult;
};

type Details = {
  [key in SearchResult]: {
    message: string;
    icon: string;
    alt: string;
  };
};

export const SearchState = ({ searchResult }: Props) => {
  const details: Details = {
    initial_search: {
      message: 'Start with searching a GitHub user',
      icon: searchIcon,
      alt: 'search icon',
    },
    user_not_found: {
      message: 'User not found',
      icon: userIcon,
      alt: 'person icon',
    },
    empty_repository_list: {
      message: 'Repository list is empty',
      icon: crossIcon,
      alt: 'cross icon',
    },
  };

  const { icon, message, alt } = details[searchResult];

  return (
    <StyledResult>
      <StyledDetails>
        <Icon src={icon} alt={alt} />
        <Message>{message}</Message>
      </StyledDetails>
    </StyledResult>
  );
};
