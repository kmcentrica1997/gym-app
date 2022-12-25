import React, {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {IMAGENAME} from '../../images';
import {RootStackParamList} from '../../navigation/types';

// type HomeProps = NativeStackScreenProps<
//   RootStackParamList,
//   'ResetPassword'
// >;

const HomeScreen = () => {
  return (
    <StyledView>
      <StyledImage source={IMAGENAME} />
      <TextContainer>
        <HighLight />
        <Heading>Wherever You Are Health Is Number One</Heading>
        <MainText>There is no instant way to a healthy life</MainText>
      </TextContainer>
      <StyledStatusBar>
        <StyledBase />
      </StyledStatusBar>
      <StyledButton onPress={() => null}>
        <ButtonText>Get Started</ButtonText>
      </StyledButton>
    </StyledView>
  );
};

const StyledView = styled(View)`
  background-color: 'rgba (0.96, 0.96, 0.96, 1)';
  flex: 1;
`;
const StyledStatusBar = styled(View)`
  /* flex: 0.01; */
  height: 0.7%;
  width: 15%;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  background: #192126;
  border-radius: 5px;
`;
const StyledBase = styled(View)`
  /* width: 21px;
  height: 3px; */
  padding-top: 2px;
  padding-right: 2px;
  padding-left: 10px;
  margin-right: 42px;
  background: #bbf246;
  border-radius: 5px;
`;
const Heading = styled(Text)`
  font-family: 'lato-regular';
  font-weight: 800;
  font-size: 24px;
  /* line-height: 29px; */
  text-align: center;
  width: 68%;
  margin-left: 60px;
`;

const HighLight = styled(View)`
  height: 8%;
  width: 20%;
  top: 30%;
  margin-left: 18%;
  background: #bbf246;
`;

const MainText = styled(Text)`
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  color: rgba(25, 33, 38, 0.5);
  font-family: 'lato-regular';
`;

const StyledButton = styled(TouchableOpacity)`
  margin-left: 20px;
  margin-top: 45px;
  width: 90%;
  height: 7%;
  background-color: #192126;
  border-radius: 32px;
  align-items: 'center';
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const TextContainer = styled(View)`
  justify-content: center;
  margin-top: -15px;
  text-align: center;
`;

const ButtonText = styled(Text)`
  text-align: center;
  font-family: 'lato-regular';
  font-weight: 700;
  font-size: 16px;
  color: white;
`;

const StyledImage = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  flex: 0.95;
  border-radius: 300px !important;
`;

export default HomeScreen;
