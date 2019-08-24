import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import data from '~/assets/list_irreguar_verbs';

export default function Quiz({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({ });
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const qtd = navigation.getParam('questions', '10');
    const sorted = new Set();
    while (sorted.size < qtd) {
      sorted.add(data[Math.floor(Math.random() * data.length)]);
    }
    setQuestions(Array.from(sorted));
  }, []);

  useEffect(() => {
    setQuestion(questions[number]);
  }, [questions, number]);

  function nextQuestion() {
    if (number < questions.length) {
      const qs = [...questions];
      qs[number] = { ...question, test: 'ssdfas' };
      setQuestions(qs);
      setNumber(number + 1);
    } else {
      // final
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.text}>{question ? question.baseForm : ''}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => nextQuestion()}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
  questionContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  text: {
    color: '#08f',
    fontSize: 50,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 15,
  },
});
