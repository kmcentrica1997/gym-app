import React, {View, ImageBackground, Text} from 'react-native';
import styled from 'styled-components';
import {IMAGENAME} from '../../images';
const HomeScreen = () => {
  return (
    <StyledView>
      <StyledImage source={IMAGENAME} />
      <StyledText>Wherever You Are Health is Number </StyledText>
    </StyledView>
  );
};

const StyledView = styled(View)`
  background-color: 'rgba (0.96, 0.96, 0.96, 1)';
  flex: 1;
`;

const StyledText = styled(Text)`
  font-family: 'Lato';
`;

const StyledOverView = styled(View)`
  background-color: 'rgba(0, 204, 0, 0.1)';
  /* width: 100%;
  height: 100%; */
`;

const StyledImage = styled(ImageBackground)`
  width: 100%;
  /* opacity: 0.8; */
  flex: 0.65;
  background-color: 'rgba(0.4,0.4,0.4,0.89)';
`;

export default HomeScreen;
