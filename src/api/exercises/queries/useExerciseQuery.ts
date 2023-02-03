import {
  QueryObserverOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

import {Exercises} from '../../backend/Api';
import {fetchExercises} from '../exerciseService';

export const useExerciseQuery = () => {
  return useQuery({queryKey: ['Exercises'], queryFn: fetchExercises});
};
