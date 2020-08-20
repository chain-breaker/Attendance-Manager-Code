import React from 'react';
import { View, Text } from 'react-native'
import * as firebase from 'firebase';

import { Input,Button} from 'react-native-elements';
import signup from './signup';
import studentoptions from './firstpage';

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
        firebase.database().ref('studentData/'+ this.state.email.replace(".","-") ).on('value', data=>{
          datas=data.toJSON();
          this.props.navigation.navigate('studentoptions', {studata:datas});
         } )  
         console.log(datas);
        
        
       
      })

    .catch(()=>{
        this.setState({error:'Authentication failed', loading:false});
    })
    
  }


  onSignUpPress(){

    this.props.navigation.navigate(signup);
    
  }

  renderButtonOrLoading(){
      if(this.state.loading){
        return <Text> Loading </Text>
      }
      return <View>
        <Button
          onPress={this.onLoginPress.bind(this)}
          title='Login'/>
        <Button
          onPress={this.onSignUpPress.bind(this)}
          title='Sign Up'/>
      </View>
  }

  render() {
    return (
      <View>
        
         
       <Input label="Email"
        value = {this.state.email}
        placeholder='username'
        onChangeText={email => this.setState({ email })}/>
       
        <Input label="Password"
        value = {this.state.password}
        secureTextEntry
        placeholder='*******'
         onChangeText={password => this.setState({ password })}/>
         <Text>{this.state.error}</Text>
        {this.renderButtonOrLoading()}  


      </View>
    );
  }

}
