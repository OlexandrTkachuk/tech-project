import styled from '@emotion/styled';

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 380px;
  height: 460px;
  margin-bottom: 15px;
  padding: 28px 36px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  position: relative;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;

export const FollowingButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  position: relative;
  width: 196px;
  height: 50px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;

export const UserAvatar = styled.img`
  display: block;
  border-radius: 85.9232px;
  position: absolute;
  width: 62px;
  height: 62px;
  top: 185px;
  left: 160px;
  margin-bottom: 18px;
  z-index: 999;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Box = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Frame = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 178px;
  left: 150px;
  border-radius: 50%;
  z-index: 9999;
`;

export const TextTweets = styled.h3`
  font-family: 'Montserrat';
  text-align: center;
  margin-top: 88px;
  margin-bottom: 16px;
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const TextFollowers = styled.h3`
  font-family: 'Montserrat';
  text-align: center;
  margin-bottom: 26px;
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;
