import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import commonStyles from '~/utils/commonStyles';

export default function Main(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="question-circle" size={130} color={commonStyles.colors.questionIcon} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Quiz', { questions: 1 })}>
        <Icon name="stream" size={14} color="#08f" />
        <Text style={styles.buttonText}>Start Quiz - 1 word</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Quiz', { questions: 10 })}>
        <Icon name="stream" size={14} color="#08f" />
        <Text style={styles.buttonText}>Start Quiz - 10 words</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Quiz', { questions: 20 })}>
        <Icon name="stream" size={14} color="#08f" />
        <Text style={styles.buttonText}>Start Quiz - 20 words</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Quiz', { questions: 30 })}>
        <Icon name="stream" size={14} color="#08f" />
        <Text style={styles.buttonText}>Start Quiz - 30 words</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: commonStyles.colors.containerBackground,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  button: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 3,
    backgroundColor: commonStyles.colors.buttonBackgroundPrimary,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
