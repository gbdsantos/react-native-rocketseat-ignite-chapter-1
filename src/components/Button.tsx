import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
};

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}  
      {...rest}
      style={styles.button}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
})