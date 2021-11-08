import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button } from '../components/Button';
import { SkilCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good morning!');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon!');
    }
    else {
      setGretting('Good evening!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Guilherme
      </Text>

      <Text style={styles.greetings}>
        {gretting}
      </Text>

      <TextInput
        onChangeText={setNewSkill}
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
      />

      <Button  
        onPress={handleAddNewSkill} 
        title="Add"
      />

      <Text style={[styles.title, { marginVertical: 20 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkilCard
            skill={item.name}
          />
        )}
      />

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

  greetings: {
    color: '#FFF',
  }

});