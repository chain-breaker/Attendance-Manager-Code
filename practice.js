import React from "react";
import { View, Text, Button } from 'react-native'

class Squares extends React.Component{
    render(){
        return(<Button title={this.props.value}/> );
    }
}
export default class Practice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill('0')
        }
    }
    printsq(num){
        return (<Squares value={this.state.squares[num]} />);
    }
    looper(){
        return(
            this.state.squares.map(this.printsq)
        );
    }
    
    render(){
      
            return( <View>{this.looper()}</View>
               
                
            );
        
    }
}