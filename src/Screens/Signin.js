import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EditText from '../Components/EditText'
import Colors from '../Assets/Colors'
import Images from '../Assets/Images'

const Signin = () => {
  return (
    <View style={styles.mainContainer}>
    <Image style={styles.logo} source={Images.logo}/>
    <EditText placeholder={'Email'}/>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:Colors.primery,
    paddingHorizontal:20
  },
  logo:{
    width:'60%',
    height:40,
    alignSelf:'center',
    paddingVertical:60,
    resizeMode:'contain'
  }
})