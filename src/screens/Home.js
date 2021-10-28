import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Guilherme
      </Text>

      <TextInput
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttons}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 20 }]}>
        My Skills
      </Text>
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
    padding: Platform.OS === 'ios' ? 15 : 10,
  },

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
  }
});