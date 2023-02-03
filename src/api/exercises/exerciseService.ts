import axios from 'axios';
import Config from 'react-native-config';

export const fetchExercises = async () => {
  const {API_KEY, API_HOST, EXERCISE_URL} = Config;

  // need to define type for options, for now using any

  const options: any = {
    method: 'GET',
    url: EXERCISE_URL,
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  };
  // axios
  //   .get(EXERCISE_URL as string, {
  //     headers: {
  //       'X-RapidAPI-Key': API_KEY,
  //       'X-RapidAPI-Host': API_HOST,
  //     },
  //   })
  //   .then(response => response.data);
  const res = await fetch(
    'https://exercisedb.p.rapidapi.com/exercises',
    options,
  )
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));

  return res;
};
