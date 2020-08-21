import React, { Component } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';

import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

try{
  firebase.initializeApp({
    apiKey: "AIzaSyAB5Cl_xqAk_0oBe2LjstZ7AYl8HMFRfKU",
    authDomain: "attendance-data-a4e08.firebaseapp.com",
    databaseURL: "https://attendance-data-a4e08.firebaseio.com",
    projectId: "attendance-data-a4e08",
    storageBucket: "attendance-data-a4e08.appspot.com",
    messagingSenderId: "424270598302",
    appId: "1:424270598302:web:aee1b90b49a64ca236ab8f",
    measurementId: "G-078JKT5XFB"
    }
  );
  }
  catch(err){
    console.log("error");
  }
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

export default class signup extends Component{
    constructor(){
        super();
        this.state={
          email:"",
          password:"",
          name:"",
          rollnumber:0,
          section:"",
          semester:"",
          disablesubmit:false,
          loading:false,
          error:""
        }
      }
      createTwoButtonAlert = () =>
      Alert.alert(
        "Signup update",
        "Student signup done and you are ready to go!",
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
    onSignUpPress(){
        
       
        firebase.database().ref('studentData/'+ this.state.semester +'/' + this.state.section +'/'+ this.state.rollnumber).set({
            name:this.state.name,
            rollnumber : this.state.rollnumber,
            email:this.state.email,
            password:this.state.password 
        })
           
        
        this.setState({error:'', loading:true});
    
        const{email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({error:'', loading:false});
            console.log("Success");
            this.setState({disablesubmit:true});
            firebase.database().ref('studentData/'+ this.state.email.replace(/\./g,"-")).set({
              name:this.state.name,
              rollnumber : this.state.rollnumber,
              email:this.state.email,
              password:this.state.password,
              semester:this.state.semester,
              section:this.state.section 
          })
          this.createTwoButtonAlert();
         
          console.log(this.state.email.replace(/\./g,"-"));
          this.props.navigation.navigate('Student Login');
        })
    
        .catch((err)=>{
            this.setState({error: err.message, loading:false});
            console.log(err.message);
        })
        
    }
    render() {
		return (
			<View style={styles.container}>
        <Text style={styles.header}>SIGN UP</Text>
			<Input  leftIcon={<MaterialCommunityIcons name="alphabetical" size={30} />} placeholder="  Student name" onChangeText={name =>{this.setState( { name } )}} />
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
          </View>
      
     <Input  leftIcon={<MaterialCommunityIcons name="numeric" size={24} />} placeholder="  Roll Number (just number eg. 1 , 2)" onChangeText={rollnumber =>{this.setState( { rollnumber } )}} />
      <Input leftIcon={<MaterialCommunityIcons name="email" size={24} />} placeholder="  UserID" onChangeText={email =>{this.setState( { email } )}} /> 
      <Input  leftIcon={<MaterialCommunityIcons name="key" size={24} />} placeholder="  Password" secureTextEntry onChangeText={password =>{
          return this.setState({ password });
        }} />
      <Text>{this.state.error}</Text>
      <Button title="SIGNUP" disabled={this.state.disablesubmit} containerStyle={{marginTop:60, width: "40%",marginLeft:"30%"}} onPress={this.onSignUpPress.bind(this)} />
			</View>
		);
	}
    
      

}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header:{
      textAlign:"center",
      fontSize:40,
      marginBottom:40,
      fontFamily:"Roboto"

  
    }
  });