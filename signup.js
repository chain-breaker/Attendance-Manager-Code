import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';

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
            firebase.database().ref('studentData/'+ this.state.email.replace(".","-")).set({
              name:this.state.name,
              rollnumber : this.state.rollnumber,
              email:this.state.email,
              password:this.state.password,
              semester:this.state.semester,
              section:this.state.section 
          })
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
			<Input label="Student name" onChangeText={name =>{this.setState( { name } )}} />
      <Input label="Select section" onChangeText={section =>{this.setState( { section } )}} /> 
      <Input label="Enter semester number" onChangeText={semester =>{this.setState( { semester} )}} /> 
      <Input label="Roll Number (just number eg. 1 , 2)" onChangeText={rollnumber =>{this.setState( { rollnumber } )}} />
      <Input label="UserID" onChangeText={email =>{this.setState( { email } )}} /> 
      <Input label="Password" secureTextEntry onChangeText={password =>{
          return this.setState({ password });
        }} />
      <Text>{this.state.error}</Text>
      <Button title="SIGNUP" disabled={this.state.disablesubmit} containerStyle={{marginTop:60}} onPress={this.onSignUpPress.bind(this)} />
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
      fontSize:29,
      marginBottom:40
  
    }
  });