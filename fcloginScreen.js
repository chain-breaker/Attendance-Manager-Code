import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native'
import * as firebase from 'firebase';
import styles from './styles';
import { Input,Button} from 'react-native-elements';
import facultyOptions from './facultyOptions'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
//import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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

export default class fcloginScreen extends React.Component {
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
        this.props.navigation.navigate('Faculty Options');
       
      })

    .catch(()=>{
        this.setState({error:'Authentication failed', loading:false});
    })
    
  }


  

  renderButtonOrLoading(){
    const {parent,parent1,parent2,button} = styles 
      if(this.state.loading){
        return <Text> Loading </Text>
      }
      return <View style = {parent1}>
        <Button
          buttonStyle={{marginEnd: 35}}
          onPress={this.onLoginPress.bind(this)}
          title='Login'/>
        
      </View>
  }

  render() {
    return (

     
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
              <Image source = {require("./assets/faculty.jpg")}
              style = {{
                marginLeft: 90,
                width: 150,
                height: 150
              }}
              ></Image>
            
            
              
              <Input 
            
            
            value = {this.state.email}
            leftIcon={<EvilIcons name="envelope" size={24} />}
            containerStyle={{marginTop:20}}
             // <View style = { styleup.container }>
            underlineColorAndroid = "transparent" 
            //placeholderTextColor = "red" 
           // containerStyle= { styleup.textInput } 

            placeholder='username'
            onChangeText={email => this.setState({ email })}
            inlineImageLeft='username'/>               

            <Input //label="Password"
            value = {this.state.password}
            leftIcon={<FontAwesome name="key" size={24} />}
            containerStyle={{marginTop:20}}
            // <View style = { styleup.container }>
            underlineColorAndroid = "transparent" 
            //placeholderTextColor = "red" 
            style = { styleup.textInput} 
            secureTextEntry
            placeholder='Password'
            onChangeText={password => this.setState({ password })}
            inlineImageLeft='password'/>
            <Text>{this.state.error}</Text>
            {this.renderButtonOrLoading()}  

            </View>
            



      
      </ImageBackground> 

      // <View>
        
         
      //  <Input label="Email"
      //   value = {this.state.email}
      //   placeholder='username'
      //   onChangeText={email => this.setState({ email })}/>
       
      //   <Input label="Password"
      //   value = {this.state.password}
      //   secureTextEntry
      //   placeholder='*******'
      //    onChangeText={password => this.setState({ password })}/>
      //    <Text>{this.state.error}</Text>
      //   {this.renderButtonOrLoading()}  


      // </View>
    );
  }

}

const styleup = StyleSheet.create({
  inner: {
    width: '80%',
    height: '60%',
    backgroundColor: 'rgba(255, 255, 255, .4)',
    
    //alignItems: 'center',
  },
  textInput:
  {
    display:"flex",
    alignItems:"center",
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