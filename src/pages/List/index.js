import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from '~/components/Item';

export default function List() {
  return (
    <View style={styles.container}>
      <Text>Lista!</Text>
      <Item baseForm="be" simplePast="was, were" pastParticiple="been" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
  },
});
