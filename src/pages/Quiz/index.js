import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput,
} from 'react-native';

import data from '~/assets/list_irreguar_verbs';

export default function Quiz({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({ });
  const [number, setNumber] = useState(0);
  const [simplePast, setSimplePast] = useState();
  const [pastParticiple, setPastParticiple] = useState();

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

  useEffect(() => {
    if (number === questions.length && number > 0) {
      navigation.navigate('Result', { questions });
    }
  }, [number]);

  function nextQuestion() {
    if (number < questions.length) {
      const qs = [...questions];

      qs[number] = {
        ...question,
        simplePastAnswer: simplePast,
        pastParticipleAnswer: pastParticiple,
      };

      setQuestions(qs);
      setNumber(number + 1);
      setPastParticiple();
      setSimplePast();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.text}>{question ? question.baseForm : ''}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Simple Past"
          onChangeText={text => setSimplePast(text)}
          value={simplePast}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Past Participle"
          onChangeText={text => setPastParticiple(text)}
          value={pastParticiple}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => nextQuestion()}
        disabled={!simplePast && !pastParticiple}
      >
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
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    color: '#08f',
    fontSize: 50,
    alignSelf: 'center',
    marginBottom: 10,
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
  textInput: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
