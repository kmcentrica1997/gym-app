import React, {View} from 'react-native';
import styled from 'styled-components';

const Screen = ({children}: any) => {
  return <Container>{children}</Container>;
};

const Container = styled(View)`
  flex: 1;
  background-color: #f7f6fa;
`;

export default Screen;
