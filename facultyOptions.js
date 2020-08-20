import React from 'react';
import { View, Text } from 'react-native'
import * as firebase from 'firebase';

import { Input,Button} from 'react-native-elements';
import AddCourse from './AddCourse';

export default class facultyOptions extends React.Component{

    render(){
        return(
        <View>
        <Button title="Add Course" onPress={()=>{this.props.navigation.navigate(AddCourse)}}/>
        <Button title="Add Notifications"/>
        </View>
        );
    }
}