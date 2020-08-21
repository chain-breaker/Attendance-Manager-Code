import {StyleSheet} from 'react-native'
//import LinearGradient from "react-native-linear-gradient";
import { color } from 'react-native-reanimated'

export default StyleSheet.create({
    heading: {
        //flex: 1,
        fontSize: 35,
        textAlign: 'center',
        color: 'black'
    },
    heading1: {
        //flex: 1,
        fontSize: 50,
        textAlign: 'center',
        color: 'black'
    },

    parent3: {
        backgroundColor: 'lightskyblue',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    parent: {
        //backgroundColor: '#fff',
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    parent1: {
        //flexDirection: 'column',
        flex: 1,
        //justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },

    parent2: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },

    button: {
        backgroundColor: 'crimson',
        borderColor: 'lightskyblue',
        borderWidth: 10,
        borderRadius: 15 
    },

    tInp: {
        flexDirection: 'row',
    }

})