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
} from './TodoItem.styled';

// images
import logo from '../../images/Logo.png';
import background from '../../images/background.png';
import frame from '../../images/Ellipse.png';

const TodoItem = ({ user }) => {
  const { avatar, tweets, followers, ifFollowing } = user;

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

        {!ifFollowing ? (
          <FollowButton onClick={() => {}} type="button">
            follow
          </FollowButton>
        ) : (
          <FollowingButton onClick={() => {}} type="button">
            following
          </FollowingButton>
        )}
      </CardWrapper>
    </>
  );
};

export default TodoItem;
