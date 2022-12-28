import React, {TextInput, View} from 'react-native';
import {Text} from 'react-native-svg';
import styled from 'styled-components';
import SearchIcon from '../../../components/atoms/svgs/SearchIcon';

const SearchBar = () => {
  return (
    <Container>
      <SearchBarContainer>
        <StyledIcon>
          <SearchIcon />
        </StyledIcon>
        <StyledSearchBar
          placeholderTextColor=" rgba(25, 33, 38, 0.5)"
          placeholder="Search"></StyledSearchBar>
      </SearchBarContainer>
    </Container>
  );
};

const StyledSearchBar = styled(TextInput)`
  /* margin-top: 50px;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  background: lightblue;
  justify-content: flex-start;
  float: left;
  padding-left: 10px;
  color: rgba(25, 33, 38, 0.5);
  border-radius: 12px; */
  flex: 1;
  margin-left: -5px;
`;

const SearchBarContainer = styled(View)`
  /* margin-right: 20px; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  height: 48px;
  margin-right: 100px;
  width: 95%;
`;

const Container = styled(View)`
  flex: 1;
`;
const StyledIcon = styled(View)`
  padding: 10px;
  margin: 5px;

  resize: stretch;
  align-items: center;
`;

export default SearchBar;
