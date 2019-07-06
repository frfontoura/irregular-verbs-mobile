import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Base Form</Text>
      <Text style={styles.text}>Simple Past</Text>
      <Text style={styles.text}>Past Participle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#08f',
    padding: 10,
    borderRadius: 3,
    marginBottom: 5,
    marginTop: 10,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    color: '#fff',
  },
});
