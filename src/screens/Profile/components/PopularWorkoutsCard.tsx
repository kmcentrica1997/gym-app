import React, {Image, ImageBackground, View} from 'react-native';
import styled from 'styled-components';

interface ImageCardProps {
  uri: String;
}

const PopularWorkouts = () => {
  return (
    <Container>
      <ImageCard
        source={{
          uri: 'https://img.freepik.com/free-photo/young-athletic-woman-white-headphones-training-listening-music-street-outdoors-working-lower-body-out-mat-concept-healthy-lifestyle-open-air-sport-activity-weight-loss_155003-23052.jpg?w=1480&t=st=1672784074~exp=1672784674~hmac=92058342d6ba57194641bfcf145176bb359e1e4a8e716284453a1ca8a4bffcdc',
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
