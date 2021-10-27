import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Guilherme</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 7,
    color: '#FFF',
    fontSize: 18,
    marginTop: 30,
    padding: 15,
  }
});