import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Button = props => {
  return (
    <TouchableOpacity style={{shadowColor:'#000000',elevation:4}}>
      <LinearGradient
        style={[styles.button, props.style]}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#E6208A', '#EA72B3']}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
