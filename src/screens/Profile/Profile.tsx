import React, {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components';
import Screen from '../components/Screen';
import SearchBar from './components/SearchBar';

const Profile = () => {
  return (
    <Screen>
      <StyledTextContainer>
        <StyledMessage>Good Morning 🔥</StyledMessage>
        <StyledDetails>Pramuditya Uzumaki</StyledDetails>
      </StyledTextContainer>
      <SearchBarContainer>
        <SearchBar></SearchBar>
      </SearchBarContainer>
    </Screen>
  );
};

export default Profile;

const StyledTextContainer = styled(SafeAreaView)`
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 20px;
`;

const SearchBarContainer = styled(View)`
  margin-left: 20px;
  margin-top: 22px;
`;

const StyledSearchBar = styled(View)`
  width: 350px;
  height: 48px;
  margin-left: 20px;
  margin-top: 22px;

  background: #ffffff;
  border-radius: 12px;
`;

const StyledMessage = styled(Text)`
  font-family: 'lato-regular';
  color: #192126;
  font-weight: 600;
  font-size: 14px;
`;
const StyledDetails = styled(Text)`
  font-family: 'lato-regular';
  color: #192126;
  font-weight: 800;
  font-size: 24px;
`;
