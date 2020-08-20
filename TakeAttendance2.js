import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
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
export default class TakeAttendance2 extends Component{
    constructor(props){
        super(props)
        this.state = {
         
          datas:{},
          checkedItems: {}
      }
    }
    componentDidMount(){
        this.parameter = this.props.route.params;
        const data = this.parameter.data[this.parameter.name];
        Object.keys(data).forEach((value)=>{
            firebase.database().ref('data/'+ this.parameter.semester+'/' + this.parameter.section  + '/' + this.parameter.name + '/'+ value).update({
                [this.parameter.date]:"A"
            })

        })
    }
    onPressHandler(){
        this.parameter = this.props.route.params;
        Object.keys(this.state.checkedItems).forEach((value)=>{
            if(this.state.checkedItems[value]){
                firebase.database().ref('data/'+ this.parameter.semester+'/' + this.parameter.section  + '/' + this.parameter.name + '/'+ value).update({
                    [this.parameter.date]:"P"
                })
            }
        })
    }
   
     renderEntries(){
       
        
        this.parameter = this.props.route.params;
       const data = this.parameter.data[this.parameter.name];
        
       
        console.log(this.state.checkedItems);
        return(
            Object.keys(data).map((value)=>{
                return(<View style={{flex:1}}>
                    <Text>{value}</Text>
                    <CheckBox checked={!! this.state.checkedItems[value]}
                        onPress={ ()=>{
                            
                            this.setState(oldState => {
                                const checkedItems = oldState.checkedItems;
                                checkedItems[value] = !checkedItems[value];
                                // oldState.checkedItems = newCheckedItems;
                                return oldState;
                            })
                        }}
                        />
                    
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
                <Button title="SUBMIT " onPress={this.onPressHandler.bind(this)}></Button>
            </View>
        )
    }
}