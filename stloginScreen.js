import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput ,Dimensions} from 'react-native'
import * as firebase from 'firebase';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
//import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Input,Button} from 'react-native-elements';
import signup from './signup';
import studentoptions from './firstpage';
import styles from './styles';
import { create } from 'react-test-renderer';
//import styles from './styles'

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

  

export default class stloginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {email:'', password:'', error: '', loading: false};
  }

  onLoginPress(){
    this.setState({error: '', loading: true });

    const{ email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        this.setState({error:'', loading:false});
        var datas;
        
        firebase.database().ref('studentData/'+ this.state.email.replace(/\./g,"-") ).on('value', data=>{
          datas=data.toJSON();
          this.props.navigation.navigate('Student Options', {studata:datas});
         } )  
         console.log(this.state.email.replace(/\./g,"-"));
        
        
       
      })

    .catch(()=>{
        this.setState({error:'Authentication failed', loading:false});
    })
    
  }


  onSignUpPress(){

    this.props.navigation.navigate("signup");
    
  }

  renderButtonOrLoading(){
    const {parent,parent1,parent2,button} = styles 
      if(this.state.loading){
        return <Text> Loading </Text>
      }
      return <View 
              style = {parent1}
              >
        <Button
          buttonStyle={{marginEnd: 35}}
          onPress={this.onLoginPress.bind(this)}
          title=' Login '/>
        <Button
          buttonStyle={{backgroundColor: '#694fad',marginEnd:132, marginTop:20 /*width: '100%'*/}}
          onPress={this.onSignUpPress.bind(this)}
          title='Sign Up'/>
      </View>
  }

  render() {
    //const {parent,parent1,parent2} = styles 
    return (
      //<View>
        
        <ImageBackground 
          source = {require("./assets/bg2.png")}
          style = {{
            flex:1,
            position:"absolute",
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height}}>

            <View style = {styleup.inner}>
              <Image source = {require("./assets/student.png")}
              style = {{
                marginLeft: 90,
                width: 150,
                height: 150
              }}
              ></Image>
           
            
              
              <Input 
            //label="Email"
            leftIcon={<EvilIcons name="envelope" size={24} />}
            value = {this.state.email}
             // <View style = { styleup.container }>
            underlineColorAndroid = "transparent" 
            //placeholderTextColor = "red" 
            style = { styleup.textInput } 

            placeholder='username'
            onChangeText={email => this.setState({ email })}
            inlineImageLeft='username'/>               

            
            <Input //label="Password"
            value = {this.state.password}
            // <View style = { styleup.container }>
            underlineColorAndroid = "transparent" 
            //placeholderTextColor = "red" 
            leftIcon={<FontAwesome name="key" size={24} />}
            style = { styleup.textInput} 
            secureTextEntry
            placeholder='Password'
            onChangeText={password => this.setState({ password })}
            inlineImageLeft='password'/>
            <Text>{this.state.error}</Text>
            {this.renderButtonOrLoading()}  

            </View>
            



      
      </ImageBackground> 
    );
  }

}

const styleup = StyleSheet.create({
  inner: {
    width: '80%',
    height: '68%',
    backgroundColor: 'rgba(255, 255, 255, .4)',
    
    //alignItems: 'center',
  },
  textInput:
  {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 40,
    //marginBottom: 10,
    marginLeft: 32,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'white',
    borderRadius: 10
  }

});