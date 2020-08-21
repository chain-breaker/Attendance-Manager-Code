import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';
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

class Addnotif extends Component {
  constructor(){
    super();
    this.state={
      text:"",
      disablesubmit:false
    }
  }
  
  
    
      SubmitHandler(){
        for(var i=this.state.startroll ; i<=this.state.endroll; i++){
       firebase.database().ref('data/'+ this.state.semester +'/' + this.state.section +'/'+ this.state.name+ '/' + i).set({
            rollnumber : i
        })
      }
       this.setState({disablesubmit:true});
      }
      render() {
		return (
			<View style={styles.container}>
        <Text style={styles.header}>POST NOTIFICATION</Text>
			<Input label="Enter the Announcement" onChangeText={name =>{this.setState( { text } )}} />
      

      <Button title="SUBMIT" disabled={this.state.disablesubmit} containerStyle={{marginTop:60, width: 40}} onPress={this.SubmitHandler.bind(this)} />
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