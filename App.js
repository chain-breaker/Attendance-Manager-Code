import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import stloginScreen from './stloginScreen'
import TakeAttendance from './TakeAttendance'
import signup from './signup';
import firstpage from './firstpage';
import studentoptions from './studentoptions';
import fcloginScreen from './fcloginScreen'
import facultyOptions from './facultyOptions'
import AddCourse from './AddCourse';
import Chatbot from './chatbot'
import TakeAttendance2 from './TakeAttendance2'
import ViewAttendance from './ViewAttendance';
import AttendanceTable from './table';
import EditAttendance from './EditAttendance';
import EditAttendance2 from './EditAttendance2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const stack=createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

export default class App extends React.Component{
  createBottomTabs(){
    return(
      <MaterialBottomTab.Navigator activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}>
        <MaterialBottomTab.Screen name="FIRSTPAGE" component={firstpage}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <MaterialBottomTab.Screen name="Chat Bot" component={Chatbot} options={{
          tabBarLabel: 'Chat-Bot',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="robot" color={color} size={20} />
          ),
        }}/>
        
      </MaterialBottomTab.Navigator>

    );
  }
  
  render(){

    
    return(
      
      <NavigationContainer>
        <stack.Navigator>
        <stack.Screen name="CMS" children={this.createBottomTabs} options={{title: " Welcome to your class manager"}}/>
        <stack.Screen name="Student Login" component={stloginScreen}/>
        <stack.Screen name="Take Attendance" component={TakeAttendance}/>
        <stack.Screen name="Faculty Login" component={fcloginScreen}/>
        <stack.Screen name="Faculty Options" component={facultyOptions}/>
          <stack.Screen name="signup" component={signup} options={{title:"Student Sign Up"}}/>
          <stack.Screen name="Add Course" component={AddCourse}/>
          <stack.Screen name="View Attendance" component={ViewAttendance}/>
          <stack.Screen name="Edit Attendance" component={EditAttendance}/>
          <stack.Screen name="Edit Attendance 2" component={EditAttendance2}/>         
          <stack.Screen name="Table" component={AttendanceTable}/>
          <stack.Screen name="Student Options" component={studentoptions}/>
          
          <stack.Screen name="Take Attendance 2" component={TakeAttendance2}/>
        </stack.Navigator>
        
      </NavigationContainer>
    )
  }
  
}