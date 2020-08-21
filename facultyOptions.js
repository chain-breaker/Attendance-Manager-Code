import React from 'react';
import { View, ImageBackground, Image, StyleSheet  } from 'react-native'

import { Button} from 'react-native-elements';
import AddCourse from './AddCourse';
import TakeAttendance from './TakeAttendance';
import EditAttendance from './EditAttendance';

export default class facultyOptions extends React.Component{

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
                <Image source = {require("./assets/addc.png")}
                style = {{
                marginTop: 20,
                marginLeft: 95,
                width: 120,
                height: 120
              }}
              ></Image>
              <View style = {{alignItems: 'center'}}>
              <Button 
                buttonStyle = {{backgroundColor: '#694fad'}}                
                title="     Add Course     " onPress={()=>{this.props.navigation.navigate("Add Course")}}/>

              </View>
              <Image source = {require("./assets/attendance.png")}
                style = {{
                marginTop: 20,
                marginLeft: 95,
                width: 120,
                height: 120
              }}
              ></Image>
                <View style = {{alignItems: 'center'}}> 
                <Button 
                buttonStyle = {{backgroundColor: '#694fad'}}

                title="Take Attendance" onPress={()=>{this.props.navigation.navigate("Take Attendance")}}/>
                    </View>
                    <Image source = {require("./assets/EAttendance.png")}
                style = {{
                marginTop: 20,
                marginLeft: 95,
                width: 120,
                height: 120
              }}
              ></Image>
                    <View style = {{alignItems: 'center'}}> 
                <Button 
                buttonStyle = {{backgroundColor: '#694fad'}}

                title="Edit Attendance" onPress={()=>{this.props.navigation.navigate("Edit Attendance")}}/>
                    </View>     
                        
          <Button
          buttonStyle={{marginEnd: 0, marginTop: 20}}
          title=' Logout '
          onPress={()=>{this.props.navigation.navigate('Faculty Login')}}
          /> 
          </View>    
                      

            </ImageBackground>   
        // <View>
        // <Button title="Add Course" onPress={()=>{this.props.navigation.navigate(AddCourse)}}/>
        // <Button title="Add Notifications"/>
        // </View>
        );
    }
}

const styleup = StyleSheet.create({
    inner: {
      width: '80%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, .4)',
      
      //alignItems: 'center',
    }
});