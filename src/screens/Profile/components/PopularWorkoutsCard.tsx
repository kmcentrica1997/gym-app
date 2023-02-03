import React, {Image, ImageBackground, View} from 'react-native';
import styled from 'styled-components';

interface ImageCardProps {
  uri: any;
}

const PopularWorkouts = ({uri}: ImageCardProps) => {
  console.log('uri', uri);
  return (
    <Container>
      <ImageCard
        source={{
          uri: uri,
        }}></ImageCard>
    </Container>
  );
};

const ImageCard = styled(Image)`
  border-radius: 23px; /* resize: cover; */

  background-color: 'rgba(0,0,0,0.5)';
  flex: 1;
  opacity: 1;
`;

const Container = styled(View)`
  flex: 1;
  height: 168px;
  margin-top: 18px;
  left: 22px;
  width: 260px;
  margin-left: -10px;
  margin-right: 20px;
  border-radius: 23px;
`;

export default PopularWorkouts;
