import React, { Component } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';

import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';


var firebaseConfig = {
  apiKey: "AIzaSyAB5Cl_xqAk_0oBe2LjstZ7AYl8HMFRfKU",
  authDomain: "attendance-data-a4e08.firebaseapp.com",
  databaseURL: "https://attendance-data-a4e08.firebaseio.com",
  projectId: "attendance-data-a4e08",
  storageBucket: "attendance-data-a4e08.appspot.com",
  messagingSenderId: "424270598302",
  appId: "1:424270598302:web:aee1b90b49a64ca236ab8f",
  measurementId: "G-078JKT5XFB"
};
try{
firebase.initializeApp(firebaseConfig);
}
catch(error){

};
const sections = [
  {
    label: 'A',
    value: 'A',
  },
  {
    label: 'B',
    value: 'B',
  },
  {
    label: 'C',
    value: 'C',
  },
  {
    label: 'D',
    value: 'D',
  },
];
const semesters = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
];

class AddCourse extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      section:"",
      semester:"",
      startroll:0,
      endroll:0,
      disablesubmit:false
    }
  }
  createTwoButtonAlert = () =>
  Alert.alert(
    "Course update",
    "Course has been added !",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
  
  
  
    
      SubmitHandler(){
        for(var i=this.state.startroll ; i<=this.state.endroll; i++){
       firebase.database().ref('data/'+ this.state.semester +'/' + this.state.section +'/'+ this.state.name+ '/' + i).set({
            rollnumber : i
        })
      }
       this.setState({disablesubmit:true});
       this.createTwoButtonAlert();
       this.props.navigation.navigate('Faculty Options');
      }
      render() {
		return (
			<View style={styles.container}>
        <Text style={styles.header}>ADD COURSE</Text>
			<Input leftIcon={<MaterialCommunityIcons name="alphabetical" size={30} />} placeholder="  Course name" onChangeText={name =>{this.setState( { name } )}} />
      <View style={{
        display:"flex",
        flexDirection:"column"
      }}>
      <RNPickerSelect
            placeholder={{
              label: 'Select your section',
              value: null,
              color: '#9EA0A4',
            }}
            
            items={sections}
            onValueChange={value => {
              this.setState({
                section: value,
              });
            }}
            style={{
              inputAndroid: {
                fontSize: 16,
                paddingHorizontal: "15%",
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 8,
                color: 'black',
                paddingRight: 30,
                paddingLeft:"15%",
                marginLeft:"5%",
                marginTop:"5%",
                width: "60%"
                 // to ensure the text is never behind the icon
              },
              
              iconContainer: {
                top: "45%",
                right: "85%",
              },
            }}
            value={this.state.section}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: 'yellow' }}
            Icon={() => {
              return <MaterialCommunityIcons name="google-classroom" size={24} />;
            }}
          />
           <RNPickerSelect
            placeholder={{
              label: 'Select your semester',
              value: null,
              color: '#9EA0A4',
            }}
            
            items={semesters}
            onValueChange={value => {
              this.setState({
                semester: value,
              });
            }}
            style={{
              inputAndroid: {
                fontSize: 16,
                paddingHorizontal: "15%",
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 8,
                color: 'black',
                paddingRight: 30,
                paddingLeft:"15%",
                marginLeft:"5%",
                marginTop:"5%",
                marginBottom: "5%",
                width:"60%"
                 // to ensure the text is never behind the icon
              },
              
              iconContainer: {
                top: "33%",
                right: "85%",
              },
            }}
            value={this.state.semester}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: 'yellow' }}
            Icon={() => {
              return <MaterialCommunityIcons name="sort-numeric" size={27} />;
            }}
          />
          </View><Input leftIcon={<MaterialCommunityIcons name="numeric" size={24} />} placeholder="  Enter starting roll number Eg.1" onChangeText={startroll =>{this.setState( { startroll } )}} /> 
      <Input leftIcon={<MaterialCommunityIcons name="numeric" size={24} />} placeholder="  Enter ending roll number Eg. 102" onChangeText={endroll =>{
          return this.setState({ endroll });
        }} />

      <Button title="SUBMIT" disabled={this.state.disablesubmit} containerStyle={{marginTop:60}} onPress={this.SubmitHandler.bind(this)} />
			</View>
		);
	}

}

//

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    textAlign:"center",
    fontSize:29,
    marginBottom:40

  }
});

export default AddCourse;