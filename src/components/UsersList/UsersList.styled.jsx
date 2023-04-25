import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

export const Container = styled.div`
  max-width: 1200px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  justify-content: space-between;
  position: relative;
`;

export const FilterHeading = styled.h2`
  color: #000;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Filter = styled(Select)`
  width: 230px;
  primary25: '#471ca9';
`;

export const BackLink = styled(NavLink)`
  display: block;
  width: 120px;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
`;

export const TodoGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  position: relative;
  width: 196px;
  height: 50px;
  margin-top: 18px;
  margin-bottom: 36px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  background-color: #7440ec;
  border: none;

  :disabled {
    color: #000;
    background-color: lightgrey;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
