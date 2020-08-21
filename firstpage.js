import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native'
import * as firebase from 'firebase';
import stloginScreen from './stloginScreen'
import { Input,Button} from 'react-native-elements';
import fcloginScreen from './fcloginScreen'
import styles from './styles'
//import LinearGradient from "react-native-linear-gradient";


export default class studentoptions extends React.Component{

    render(){
        //const {parent3} = styles 
        return(  
            <ImageBackground 
            source = {require("./assets/bg3.png")}
            style = {{
                      flex:1,
                      //alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%'}}>
                          <View>

                <Image source = {require("./assets/frontpage.png")}
                style = {{
                marginBottom: 20,
                //marginLeft: 95,
                width: '100%',
                height: 195
              }}
              ></Image>
               
                <Button
                
                buttonStyle = {{marginBottom: 20}}
                
                title="Login as Student" onPress={()=>{this.props.navigation.navigate('Student Login')}}/> 
                
                
                <Button title="Login as Faculty" onPress={()=>{this.props.navigation.navigate('Faculty Login')}}/>
            </View>

                      </ImageBackground>
    
        );
    }
}