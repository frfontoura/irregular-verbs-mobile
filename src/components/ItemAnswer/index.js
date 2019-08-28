import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemAnswer({
  baseForm, simplePast, pastParticiple, simplePastAnswer, pastParticipleAnswer, simplePastCorrect, pastParticipleCorrect,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{baseForm}</Text>
        <Text style={styles.text}>{simplePast}</Text>
        <Text style={styles.text}>{pastParticiple}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}> </Text>
        <Text style={[styles.text, simplePastCorrect ? styles.correct : styles.incorrect]}>{simplePastAnswer}</Text>
        <Text style={[styles.text, pastParticipleCorrect ? styles.correct : styles.incorrect]}>{pastParticipleAnswer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 3,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    flex: 1,
  },
  correct: {
    color: '#080',
  },
  incorrect: {
    color: '#f00',
  },
});
