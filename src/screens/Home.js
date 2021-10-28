import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Guilherme
      </Text>

      <TextInput
        onChangeText={setNewSkill}
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleAddNewSkill}
        style={styles.button}
      >
        <Text style={styles.buttons}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 20 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={skill}
            style={styles.buttonSkill}
          >
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))
      }
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
  },

  buttonSkill: {
    backgroundColor: '#1F1E25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },

  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});