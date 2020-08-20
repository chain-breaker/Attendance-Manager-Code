import React from 'react';
import { View, Text } from 'react-native'
import * as firebase from 'firebase';
import ViewAttendance from './ViewAttendance'

import { Input,Button} from 'react-native-elements';

export default class studentoptions extends React.Component{

    render(){
        return(<View>
        <Button title="View Attendance" onPress={()=>{
          
            this.props.navigation.navigate('ViewAttendance', {studata : this.props.route.params.studata});
        }}/> 
        <Button title="See Notifications"/>
        </View>
        );
    }
}