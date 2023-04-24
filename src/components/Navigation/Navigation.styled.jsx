import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: #001a00;
  text-decoration: none;
  margin-right: 10px;
  padding: 6px 10px;
  border-radius: 12px;
  &.active {
    color: #fff;
    background-color: #4b2a99;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
`;
