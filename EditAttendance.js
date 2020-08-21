import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Input , Button} from 'react-native-elements';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import TakeAttendance2 from './TakeAttendance2';
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

  export default class EditAttendance extends Component{
    constructor(props){
      super(props)
      this.state = {
        isPresent:true,
        date:"2020-05-15",
        section:"",
        semester:"",
        submitPressed:false,
        loading:true,
        falseCourseSelected:false
        
        
      }
    }

    handleSubmit() {
      firebase.database().ref('data/'+ this.state.semester+'/' + this.state.section ).once('value')
        .then((data) => {
          this.data = data;
          this.setState({loading:false});
          if(! (!! this.data)){
            this.setState({isPresent:false});
          }
        });
    }
    
    renderButtons(){
     

        const datas = this.data.toJSON();
        console.log(datas);
        if( !(!! datas)){
            return(<View><Text>NO COURSE IS REGISTERED FOR THIS SEMESTER AND SECTION</Text></View>)
        }
       
         return( Object.keys(datas).map((value) =>{
          return(
              <Button 
              buttonStyle = {{marginTop:30, marginLeft:10,padding:15}}
              title={value} onPress={()=> {
               const firstkey= Object.keys(datas[value])[0];

                console.log(datas[value][firstkey][this.state.date]);
                if(!! datas[value][firstkey][this.state.date])
                this.props.navigation.navigate('Edit Attendance 2', {date:this.state.date, name:value,semester:this.state.semester,section:this.state.section,data:datas});
                else{
                    this.setState({falseCourseSelected:true})
                }
              } }/>
          )
         }))
        
        


    
  }
   
    render(){
      return (
        <ImageBackground 
            source = {require("./assets/bg3.png")}
            style = {{
                      flex:1,
                      //alignItems: 'stretch',
                      justifyContent: "space-between",
                      width: '100%',
                      height: '100%'}}>
                        
                        <View style={{alignContent:"center"}}>
                         <Text style={{fontSize:20, marginLeft:"30%", marginTop:"20%"}}>Pick a date</Text> 
          
        <DatePicker
          style={{width: "40%", marginLeft:"30%" }}
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
          onDateChange={(date) => {this.setState({date: date})}}
        />
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
          </View><Button 
        buttonStyle = {{backgroundColor: '#694fad', marginTop: 10}}
        title="SUBMIT" onPress={()=>{this.handleSubmit.call(this);
        this.setState({submitPressed:true})} }/>
        <View  style={{display:"flex",
      flexDirection:"row",
      flexWrap:"wrap"}}>
        {this.state.submitPressed && (this.state.loading ? <View><Text>Loading</Text></View> : this.renderButtons.call(this))}
        {this.state.falseCourseSelected && <View><Text>Attendance Record with this date doesnt exist</Text></View>}
        </View>
            
            </View>
            </ImageBackground>
      )
    }
    
  }