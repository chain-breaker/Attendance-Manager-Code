import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';
import AttendanceTable from './table'
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
      
  }
  export default class ViewAttendance extends Component{
      constructor(){
          super();
          this.state={
              semester:"4",
              section:"A",
              fetched:false
          }
        }

          componentDidMount(){
            this.parameter = this.props.route.params.studata;
              console.log(this.parameter);
               firebase.database().ref('data/'+ this.parameter.semester+'/' + this.parameter.section ).once('value').then((data)=>{
                this.datas=data.toJSON();
                this.setState({fetched:true});
                console.log(this.datas);
               })
              
          }
          RenderButtons(){
              
              return( Object.keys(this.datas).map(( value) =>{
                  return(
                <Button title={value} onPress={()=> {
                  this.props.navigation.navigate('Table', {attendancedata:this.datas[value]});
                } }/>
                  )
                })
              )
              
          }

          render() {

            return (
                <View style={styles.container}>
            <Text style={styles.header}>ViewAttendance</Text>
              
            { this.state.fetched ? this.RenderButtons.call(this) : <Text>Loading</Text>}

    
          
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