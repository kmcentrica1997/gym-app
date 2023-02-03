import axios from 'axios';
import Config from 'react-native-config';

export const fetchExercises = async () => {
  const {API_KEY, API_HOST, EXERCISE_URL} = Config;

  axios
    .get(EXERCISE_URL as string, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    })
    .then(response => response.data);
};
