import React from 'react';
import { View, Text } from 'react-native';

export default function Quiz({ navigation }) {
  const questions = navigation.getParam('questions', '10');

  return (
    <View>
      <Text>Quiz</Text>
      <Text>{questions}</Text>
    </View>
  );
}
