import React from 'react';
import { View, Text } from 'react-native'
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


const stack=createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

export default class App extends React.Component{
  createBottomTabs(){
    return(
      <MaterialBottomTab.Navigator activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}>
        <MaterialBottomTab.Screen name="firstpage" component={firstpage}/>
      <MaterialBottomTab.Screen name="CLASSMATE" component={Chatbot}/>
        
      </MaterialBottomTab.Navigator>

    );
  }
  
  render(){

    
    return(
      
      <NavigationContainer>
        <stack.Navigator>
        <stack.Screen name="Student Login" component={stloginScreen}/>
        <stack.Screen name="TakeAttendance" component={TakeAttendance}/>
        <stack.Screen name="bottomtabs" children={this.createBottomTabs}/>
        <stack.Screen name="facultyOptions" component={facultyOptions}/>
          <stack.Screen name="signup" component={signup}/>
          <stack.Screen name="AddCourse" component={AddCourse}/>
          <stack.Screen name="ViewAttendance" component={ViewAttendance}/>
         
          <stack.Screen name="Table" component={AttendanceTable}/>
          <stack.Screen name="studentoptions" component={studentoptions}/>
          <stack.Screen name="Faculty Login" component={fcloginScreen}/>
          <stack.Screen name="TakeAttendance2" component={TakeAttendance2}/>
        </stack.Navigator>
        
      </NavigationContainer>
    )
  }
  
}