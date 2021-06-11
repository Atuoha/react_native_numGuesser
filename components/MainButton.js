import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Colors from '../constants/colors'

export default function MainButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.accent,
        paddingVertical: Dimensions.get('window').width > 350 ? 12 : 9,
        paddingHorizontal: 10,
        borderRadius: 25,
        textAlign: 'center',
    },

    buttonText:{
        color: 'white',
        fontSize: Dimensions.get('window').width > 350 ? 18 : 15,
        fontFamily: 'open-sans-reg'
    }
})

