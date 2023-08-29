import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../Assets/Images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Signin')
    }, 2000);
  }, []);

  return (
    <ImageBackground style={styles.mainContainer} source={Images.splash}>
      <View style={styles.mainView}>
        <Image style={styles.logo} source={Images.logo} />
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#EA72B3',
    opacity: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: 70,
  },
});
