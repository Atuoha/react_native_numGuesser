import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
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
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 25,
        textAlign: 'center',
    },

    buttonText:{
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-reg'
    }
})

