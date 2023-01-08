import React, {ScrollView, View} from 'react-native';
import styled from 'styled-components';

const Screen = ({children}: any) => {
  return <Container>{children}</Container>;
};

const Container = styled(ScrollView)`
  flex: 1;
  background-color: #f7f6fa;
  flex-direction: column;
`;

export default Screen;
