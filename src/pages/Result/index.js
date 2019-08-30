import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';

import ItemAnswer from '~/components/ItemAnswer';
import ListTitle from '~/components/ListTitle';
import commonStyles from '~/utils/commonStyles';

export default function Result({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    checkAnswers(navigation.getParam('questions', []));
  }, []);

  function checkAnswers(qs) {
    let qty = 0;

    qs.forEach((q) => {
      q.simplePastCorrect = checkAnwser(q.simplePast, q.simplePastAnswer);
      q.pastParticipleCorrect = checkAnwser(q.pastParticiple, q.pastParticipleAnswer);

      if (q.simplePastCorrect) qty++;
      if (q.pastParticipleCorrect) qty++;
    });

    setQuestions(qs);
    setCorrectAnswers(qty);
  }

  function checkAnwser(answer, userAnswer) {
    return answer.split(',').map(item => item.trim().toLowerCase()).includes(userAnswer.toLowerCase());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`You answered correctly ${correctAnswers} of ${questions.length * 2} words`}</Text>

      <ListTitle />

      <FlatList
        data={questions}
        keyExtractor={item => `${item.baseForm}`}
        renderItem={({ item }) => (<ItemAnswer {...item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    backgroundColor: commonStyles.colors.containerBackground,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15,
    marginTop: 15,
  },
});
