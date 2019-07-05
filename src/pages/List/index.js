import React from 'react';
import { View, StyleSheet } from 'react-native';

import Item from '~/components/Item';
import ItemTitle from '~/components/ListTitle';

export default function List() {
  return (
    <View style={styles.container}>
      <ItemTitle />
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
