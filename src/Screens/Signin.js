import {Image, StyleSheet, Text, View,ImageBackground} from 'react-native';
import React from 'react';
import EditText from '../Components/EditText';
import Button from '../Components/Button';
import Colors from '../Assets/Colors';
import Images from '../Assets/Images';

const Signin = () => {
  return (
    <ImageBackground style={styles.mainBackImage} source={Images.professional}>
    <View style={styles.mainContainer}>
      <Image style={styles.logo} source={Images.logo} />
      <View style={styles.mainText}>
        <View style={styles.divider} />
        <Text style={styles.text}>{'Sign in as a Professional'}</Text>
        <View style={styles.divider} />
      </View>
      <EditText placeholder={'Email'} />
      <EditText placeholder={'Enter Your Password'} style={styles.textInput}/>
      <Text style={styles.forgetText}>{'Forget Password?'}</Text>
      <Button style={styles.button} title={'Login'}/>
    </View>
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mainBackImage:{
width:'100%',
height:'100%'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primery,
    paddingHorizontal: 20,
  opacity:0.8
  },
  logo: {
    width: '60%',
    height: 40,
    alignSelf: 'center',
    paddingVertical: 60,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    paddingHorizontal: 10,
  },
  mainText: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    paddingVertical:30
  },
  divider: {
    borderWidth: 1,
    borderColor: 'white',
    width: 60,
    height:1
  },
  textInput:{
    marginTop:20
  },
  forgetText:{
    color:'white',
    textAlign:'right',
    marginTop:3
  },
  button:{
    marginTop:20
  }
});
