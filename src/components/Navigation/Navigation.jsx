import { NavigationWrapper, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/tweets">Tweets</StyledNavLink>
    </NavigationWrapper>
  );
};

export default Navigation;
