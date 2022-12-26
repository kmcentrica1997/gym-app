/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';

AppRegistry.registerComponent(appName, () => Profile);
