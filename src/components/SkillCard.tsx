import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkilCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
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