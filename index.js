/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import ViewAttendance from './ViewAttendance';
//import AddCourse from './AddCourse'
import App from './App'
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => ViewAttendance);
//AppRegistry.registerComponent(appName, () => AddCourse);
AppRegistry.registerComponent(appName, () => App);
