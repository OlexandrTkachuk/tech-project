// system
import {
  CardWrapper,
  Frame,
  Logo,
  UserAvatar,
  Box,
  TextTweets,
  FollowButton,
  FollowingButton,
  TextFollowers,
} from './UserItem.styled';

// images
import logo from '../../images/Logo.png';
import background from '../../images/background.png';
import frame from '../../images/Ellipse.png';

const TodoItem = ({ user, onFollow }) => {
  const { avatar, tweets, followers, isFollowing } = user;

  return (
    <>
      <CardWrapper>
        <Logo src={logo} alt="logo" />
        <img src={background} alt="background" />
        <Frame src={frame} alt="user avatar" />
        <UserAvatar src={avatar} alt="User Avatar" />

        <Box />

        <TextTweets>{tweets} tweets</TextTweets>
        <TextFollowers>
          {followers.toLocaleString('en-US')} followers
        </TextFollowers>

        {!isFollowing ? (
          <FollowButton onClick={() => onFollow(user)} type="button">
            follow
          </FollowButton>
        ) : (
          <FollowingButton onClick={() => onFollow(user)} type="button">
            following
          </FollowingButton>
        )}
      </CardWrapper>
    </>
  );
};

export default TodoItem;
