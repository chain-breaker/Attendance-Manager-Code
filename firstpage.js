import React from 'react';
import { View, Text } from 'react-native'
import * as firebase from 'firebase';
import stloginScreen from './stloginScreen'
import { Input,Button} from 'react-native-elements';
import fcloginScreen from './fcloginScreen'

export default class studentoptions extends React.Component{

    render(){
        return(<View>
            <Button title="Login as Student" onPress={()=>{this.props.navigation.navigate('Student Login')}}/>
            <Button title="Login as Faculty" onPress={()=>{this.props.navigation.navigate('Faculty Login')}}/>
        </View>
        );
    }
}