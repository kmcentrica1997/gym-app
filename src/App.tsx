import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {RootNavigator} from './navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useExerciseQuery} from './api/exercises/queries/useExerciseQuery';

export default () => {
  const navigationRef = useNavigationContainerRef();
  const queryClient = new QueryClient();

  useEffect(() => {}, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};
