import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import * as firebase from 'firebase';
import ViewAttendance from './ViewAttendance'

import { Input,Button} from 'react-native-elements';

export default class studentoptions extends React.Component{

    render(){
        return(
            <ImageBackground 
            source = {require("./assets/bg2.png")}
            style = {{
                      flex:1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'}}>
                <View style = {styleup.inner}>
                <Image source = {require("./assets/attendance.png")}
                style = {{
                marginTop: 10,
                marginLeft: 95,
                width: 140,
                height: 150
              }}
              ></Image>
              <View style = {{alignItems: 'center'}}>
              <Button 
                buttonStyle = {{backgroundColor: '#694fad'}}                
                title="View Attendance" onPress={()=>{
                
                    this.props.navigation.navigate('View Attendance', {studata : this.props.route.params.studata});
                }}/>

              </View>
              
                <View style = {{alignItems: 'center'}}>
               
                    </View> 
                    <Button
          buttonStyle={{marginEnd: 0, marginTop: 20}}
          title=' Logout '
          onPress={()=>{this.props.navigation.navigate('Student Login')}}
          /> 
                </View>          

            </ImageBackground>             
        
        
        );
    }
}

const styleup = StyleSheet.create({
    inner: {
      width: '80%',
      height: '80%',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      
      //alignItems: 'center',
    }
});