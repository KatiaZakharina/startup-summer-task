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

import personIcon from 'assets/svg/person.svg';
import peopleIcon from 'assets/svg/people.svg';

export const UserInfo = () => {
  return (
    <StyledUserInfo>
      <Avatar src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <div>
        <UserName>Dan Abramov</UserName>
        <RepositoryName>gaearon</RepositoryName>
        <InfoList>
          <InfoItem>
            <Icon bgImage={peopleIcon} />
            <Info>65.8k followers</Info>
          </InfoItem>

          <InfoItem>
            <Icon bgImage={personIcon} />
            <Info>171 following</Info>
          </InfoItem>
        </InfoList>
      </div>
    </StyledUserInfo>
  );
};
