import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Colors from '../Assets/Colors'

const EditText = (props) => {
  return (
    <TextInput 
    placeholderTextColor={Colors.disableColor}
    placeholder={props.placeholder}
    style={[styles.mainContainer,props.style]}>
     
    </TextInput>
  )
}

export default EditText

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:60,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:10
    }
})