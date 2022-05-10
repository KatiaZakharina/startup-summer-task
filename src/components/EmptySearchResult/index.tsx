import { Icon, Message, StyledDetails, StyledResult } from './styled';

import searchIcon from 'assets/svg/search.svg';
import userIcon from 'assets/svg/user.svg';
import crossIcon from 'assets/svg/rep.svg';

type SearchResult = 'empty_search' | 'empty_user_list' | 'empty_repository_list';

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

export const EmptySearchResult = ({ searchResult }: Props) => {
  const details: Details = {
    empty_search: {
      message: 'Start with searching a GitHub user',
      icon: searchIcon,
      alt: 'search icon',
    },
    empty_user_list: {
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
