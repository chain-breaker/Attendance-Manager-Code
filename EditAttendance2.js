import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Input , Button, CheckBox} from 'react-native-elements';
import * as firebase from 'firebase';
//import { ScrollView } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
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
export default class EditAttendance2 extends Component{
    constructor(props){
        super(props)
        this.state = {
          submitPressed:false,
          loaded:false,
          datas:{},
          checkedItems: {}
      }
    }
    componentDidMount(){
        this.parameter = this.props.route.params;
        const data = this.parameter.data[this.parameter.name];
        Object.keys(data).forEach(value=>{
            if(data[value][this.parameter.date].localeCompare('P') == 0)
            this.setState((prevState)=>{
                const checkedItems = prevState.checkedItems;
                checkedItems[value] = true;
                return  prevState

            })
           
            else
            this.setState((prevState)=>{
                const checkedItems = prevState.checkedItems;
                checkedItems[value] = false;
                return  prevState

            })
        })
    }
    createTwoButtonAlert = () =>
    Alert.alert(
      "Attendance update",
      "Attendance has been updated",
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
    onPressHandler(){
        this.parameter = this.props.route.params;
        Object.keys(this.state.checkedItems).forEach((value)=>{
            if(this.state.checkedItems[value]){
                firebase.database().ref('data/'+ this.parameter.semester+'/' + this.parameter.section  + '/' + this.parameter.name + '/'+ value).update({
                    [this.parameter.date]:"P"
                })
            }
        })
        this.setState({submitPressed:true});
        this.createTwoButtonAlert();
        this.props.navigation.navigate('Faculty Options');

    }
   
     renderEntries(){
       
        
        
       this.alternate=true;//"#acddfa";
        this.parameter = this.props.route.params;
       const data = this.parameter.data[this.parameter.name];
    const first= "IIT";
    var diff;
    console.log((parseInt(this.parameter.semester)));
    if((parseInt(this.parameter.semester)%2) == 0)
        diff=parseInt(this.parameter.semester)/2;
    else
        diff= (parseInt(this.parameter.semester) +1)/2;
    const year= 2020 - diff;

        
       
        console.log(this.state.checkedItems);
        return(
            Object.keys(data).map((value)=>{
                this.alternate=!this.alternate;
                this.color= this.alternate? "#ffffff":"#def6ff";
                return(<View style={{display:"flex",
                justifyContent:"space-around",
                flexDirection:"row",
                borderBottomWidth:1,
                borderBottomEndRadius:2,
                alignItems:"center",
                backgroundColor: this.color}}>
                     <View style={{display:"flex",
                alignItems:"center"}}><View><Text style={{fontSize:20}}>{first +year+ (("00"+ value).slice(-3))}</Text></View></View>
                 <View>
                 <CheckBox checked={ !! this.state.checkedItems[value]}
                        onPress={ ()=>{
                            
                            this.setState(oldState => {
                                const checkedItems = oldState.checkedItems;
                                checkedItems[value] = !checkedItems[value];
                               
                                return oldState;
                            })
                        }}
                        />
                 </View>
                   
                    
                    </View>
                )
            })
        )
    }

    render(){
        
        return(
            <View>
                <View style={{height: "94.5%"}}>
                <ScrollView >
                    {this.renderEntries.call(this)}
                    
            
                    
                </ScrollView>
                </View>
                <Button title="SUBMIT " disabled={ this.state.submitPressed} onPress={this.onPressHandler.bind(this)}></Button>
            </View>
        )
    }
}