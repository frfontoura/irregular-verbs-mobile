import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ navigation }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(navigation.getParam('questions', []));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A {JSON.stringify(questions)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },

  text: {
    color: '#fff',
  },

});
