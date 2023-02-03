import React, {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

interface ScreenProps {
  children: JSX.Element;
}

const Screen = ({children}: ScreenProps) => {
  return <Container>{children}</Container>;
};

const Container = styled(ScrollView)`
  flex: 1;
  background-color: #f7f6fa;
  flex-direction: column;
`;

export default Screen;
