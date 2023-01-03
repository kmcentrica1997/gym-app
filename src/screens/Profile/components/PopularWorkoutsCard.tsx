import React, {Image, ImageBackground, View} from 'react-native';
import styled from 'styled-components';
import {IMAGENAME} from '../../../images';
const image = {
  uri: 'https://img.freepik.com/free-photo/young-athletic-woman-white-headphones-training-listening-music-street-outdoors-working-lower-body-out-mat-concept-healthy-lifestyle-open-air-sport-activity-weight-loss_155003-23052.jpg?w=1800&t=st=1672243583~exp=1672244183~hmac=e78938c5ed5c5b8b6ef435ec4722c2cbb06fd06afc0626c2e129d3409706e13c',
};

const PopularWorkouts = () => {
  return (
    <ImageCard
      source={{
        uri: 'https://img.freepik.com/free-photo/young-athletic-woman-white-headphones-training-listening-music-street-outdoors-working-lower-body-out-mat-concept-healthy-lifestyle-open-air-sport-activity-weight-loss_155003-23052.jpg?w=1480&t=st=1672784074~exp=1672784674~hmac=92058342d6ba57194641bfcf145176bb359e1e4a8e716284453a1ca8a4bffcdc',
      }}></ImageCard>
  );
};

const ImageCard = styled(Image)`
  width: 280px;
  height: 174px;
  border-radius: 23px; /* resize: cover; */
  left: 22px;
  margin-top: 20px;
  margin-left: -10px;
  margin-right: 20px;
  background-color: red;
  opacity: 0.8;
`;

export default PopularWorkouts;
