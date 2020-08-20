import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import TakeAttendance2 from './TakeAttendance2';
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

  export default class TakeAttendance extends Component{
    constructor(props){
      super(props)
      this.state = {
        date:"2020-05-15",
        section:"",
        semester:"",
        submitPressed:false,
        loading:true
        
        
      }
    }

    handleSubmit() {
      firebase.database().ref('data/'+ this.state.semester+'/' + this.state.section ).once('value')
        .then((data) => {
          this.data = data;
          this.setState({loading:false});
        });
    }
    
    renderButtons(){
      // var datas;
      
      //   const data = await firebase.database().ref('data/'+ this.state.semester+'/' + this.state.section ).once('value');

        const datas = this.data.toJSON();
        console.log(datas);
        // this.setState({loading:false});


        // if(this.state.loading==false){
         return( Object.keys(datas).map(( value) =>{
          return(
              <Button title={value} onPress={()=> {
                this.props.navigation.navigate('TakeAttendance2', {date:this.state.date, name:value,semester:this.state.semester,section:this.state.section,data:datas});
              } }/>
          )
         }))
        //  else {
        //  return(
        //   <View><Text>Loading</Text></View>
        // )
        //  }
        


    
  }
   
    render(){
      return ( <View>
        <DatePicker
          style={{width: 200, }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-05-01"
          maxDate="2050-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            
          }}
          onDateChange={(date) => {()=>{this.setState({date: date})}}}
        />
        <Input label="Select section" onChangeText={section =>{this.setState( { section } )}} /> 
        <Input label="Enter semester number" onChangeText={semester =>{ this.setState( {semester} )}} /> 
        <Button title="SUBMIT" onPress={()=>{this.handleSubmit.call(this);
        this.setState({submitPressed:true})} /* ()=>{
          this.renderButtons.bind(this);
          this.setState({submitPressed:true});
          
        } */}/>
        {this.state.submitPressed && (this.state.loading ? <View><Text>Loading</Text></View> : this.renderButtons.call(this))}
        {/* {!this.state.loading && this.renderButtons.bind(this)} */}
        {/* {await this.renderButtons()} */}
          
            
            </View>
      )
    }
    
  }