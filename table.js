import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class AttendaceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      
      students: {
            "1":{"rollnumber":"1", "24-7-2020":"P", "25-7-2020":"P", "26-7-2020":"P" },
            "2":{"rollnumber":"2", "24-7-2020":"P", "25-7-2020":"P", "26-7-2020":"P" },
            "5":{"rollnumber":"5", "24-7-2020":"P", "25-7-2020":"P", "26-7-2020":"P" },
            "3":{"rollnumber":"3", "24-7-2020":"P", "25-7-2020":"P", "26-7-2020":"P" },
            "99":{"rollnumber":"99", "24-7-2020":"A", "25-7-2020":"P" , "26-7-2020":"P"},
            "6":{"rollnumber":"6", "24-7-2020":"P", "25-7-2020":"P", "26-7-2020":"P" },
            "7":{"rollnumber":"7", "24-7-2020":"P", "25-7-2020":"P", "26-7-2020":"P" }
         }
    }
  }

  render() {

   
    const myobj = this.props.route.params.attendancedata;
       const head = [];
      
         var datatable = [];
          let i = 0;
         Object.keys(myobj).forEach(function(key1) {
                     var dataa = [];
                     
                     Object.keys(myobj[key1]).forEach(function(key2) {
                           dataa.push(myobj[key1][key2])
                           if(i==0)
                           {
                                 head.push(key2);
                           }
                           
                     })
                     i=1;
                     dataa.reverse();
                     datatable.push(dataa)
         })
      
        head.reverse();
 
    
  
    return (

      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9',borderBottomWidth:10,padding:8}}>
              <Row data={head}  style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9',borderBottomWidth:10,padding:8}}>
                {
                  datatable.map((dataa, index) => (
                    <Row
                      key={index}
                      data={dataa}
                      
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                      borderStyle={{borderColor: '#C1C0B9',borderBottomWidth:10,padding:8}}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#FFF0F5' },
  header: { height: 50,  width: 400, backgroundColor: '#73b4ff' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, width: 400, backgroundColor: '#E6E6FA' , }
});

