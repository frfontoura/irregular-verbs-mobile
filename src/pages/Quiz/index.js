import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import data from '~/assets/list_irreguar_verbs';

import Item from '~/components/Item';

export default function Quiz({ navigation }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const qtd = navigation.getParam('questions', '10');
    const sorted = new Set();
    while (sorted.size < qtd) {
      sorted.add(data[Math.floor(Math.random() * data.length)]);
    }
    setQuestions(Array.from(sorted));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={item => `${item.baseForm}`}
        renderItem={({ item }) => (<Item {...item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});
