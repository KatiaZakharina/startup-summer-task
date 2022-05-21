import {
  Avatar,
  Icon,
  Info,
  InfoItem,
  InfoList,
  RepositoryName,
  StyledUserInfo,
  UserName,
} from './styled';
import { useAppSelector } from 'store/hooks';

import personIcon from 'assets/svg/person.svg';
import peopleIcon from 'assets/svg/people.svg';
import { kNumberFormatter } from 'utils/kNumberFormatter';

export const UserInfo = () => {
  const user = useAppSelector((state) => state.searchReducer.result?.user);
  //FIXME:

  return user ? (
    <StyledUserInfo>
      <Avatar src={user.avatar_url} />
      <div>
        <UserName>{user.name}</UserName>
        <RepositoryName href={user.html_url} target="_blank" rel="noreferrer">
          {user.login}
        </RepositoryName>
        <InfoList>
          <InfoItem>
            <Icon bgImage={peopleIcon} />
            <Info>{kNumberFormatter(user.followers)} followers</Info>
          </InfoItem>

          <InfoItem>
            <Icon bgImage={personIcon} />
            <Info>{kNumberFormatter(user.following)} following</Info>
          </InfoItem>
        </InfoList>
      </div>
    </StyledUserInfo>
  ) : null;
};
