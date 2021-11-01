import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkilCard({ skill }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={skill}
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
})