import React, {
  View,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {IMAGENAME} from '../../images';
const HomeScreen = () => {
  return (
    <StyledView>
      <StyledImage source={IMAGENAME} />
      <TextContainer></TextContainer>
      <StyledButton onPress={() => null}>
        <ButtonText style={{color: 'white'}}>Get Started</ButtonText>
      </StyledButton>
    </StyledView>
  );
};

const StyledView = styled(View)`
  background-color: 'rgba (0.96, 0.96, 0.96, 1)';
  flex: 1;
`;

const StyledButton = styled(TouchableOpacity)`
  left: 20px;
  margin-top: 75px;
  width: 90%;
  height: 6%;
  background-color: #192126;
  border-radius: 32px;
  align-items: 'center';
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const TextContainer = styled(View)`
  justify-content: center;
`;

const ButtonText = styled(Text)`
  text-align: center;
  font-family: 'lato-regular';
  font-weight: 700;
  font-size: 16px;
  color: 'white';
`;

const StyledImage = styled(ImageBackground)`
  width: 100%;
  flex: 0.8;
  /* opacity: 0.8; */
  /* flex: 0.4; */
  justify-content: 'center';

  background-color: 'rgba(0.4,0.4,0.4,0.89)';
`;

export default HomeScreen;
