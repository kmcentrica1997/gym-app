import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import React, {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import {useExerciseQuery} from '../../api/exercises/queries/useExerciseQuery';
import {RootStackParamList} from '../../navigation/types';
import Screen from '../components/Screen';
import PopularWorkouts from './components/PopularWorkoutsCard';
import SearchBar from './components/SearchBar';
import TodaysPlanCard from './components/TodaysPlanCard';
type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen: FC<ProfileScreenProps> = () => {
  const {data: ExerciseData} = useExerciseQuery();

  useEffect(() => {
    if (ExerciseData) {
      console.log('hi', ExerciseData[0].gifUrl);
    }
  }, []);

  return (
    <Screen>
      <StyledTextContainer>
        <StyledMessage>Good Morning 🔥</StyledMessage>
        <StyledDetails>Pramuditya Uzumaki</StyledDetails>
      </StyledTextContainer>
      <SearchBarContainer>
        <SearchBar></SearchBar>
      </SearchBarContainer>
      <WorkoutContainer>
        <StyledWorkoutText>Popular Workouts</StyledWorkoutText>
        <StyledCardRow contentContainerStyle={{flexDirection: 'row'}}>
          {ExerciseData
            ? ExerciseData.slice(0, 5).map(Exercise => (
                <PopularWorkouts
                  uri={Exercise.gifUrl?.replace(/http/g, 'https')}
                />
              ))
            : null}
        </StyledCardRow>
      </WorkoutContainer>
      <TodaysPlanContainer>
        <StyledPlanText>Today Plan</StyledPlanText>
        <StyledCardRow contentContainerStyle={{flexDirection: 'column'}}>
          <TodaysPlanCard />
          <TodaysPlanCard />
          <TodaysPlanCard />
          <TodaysPlanCard />
        </StyledCardRow>
      </TodaysPlanContainer>
    </Screen>
  );
};

export default ProfileScreen;

const StyledTextContainer = styled(SafeAreaView)`
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 25px;
`;

const StyledCardRow = styled(ScrollView)`
  /* flex-grow: 1;
  flex: 1; */
  margin-left: 10px;
  flex-direction: row;
`;
const WorkoutContainer = styled(View)`
  margin-top: 70px;
`;
const TodaysPlanContainer = styled(View)`
  margin-top: 30px;
`;
const StyledWorkoutText = styled(Text)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #192126;
  line-height: 22px;
  justify-content: flex-start;

  margin-left: 25px;
  /* left: 24px;
  top: 174px; */
`;

const StyledPlanText = styled(Text)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #192126;
  line-height: 22px;
  /* justify-content: flex-start; */
  margin-left: 25px;
  /* margin-bottom: 30px;
  padding-bottom: 400px; */
`;

const SearchBarContainer = styled(View)`
  margin-left: 20px;
  margin-top: 22px;
`;

const StyledMessage = styled(Text)`
  font-family: 'lato-regular';
  color: #192126;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
`;
const StyledDetails = styled(Text)`
  font-family: 'lato-regular';
  color: #192126;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
`;
