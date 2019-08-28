import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Item from '~/components/Item';
import ListTitle from '~/components/ListTitle';

import data from '~/assets/list_irreguar_verbs';

export default function List() {
  return (
    <View style={styles.container}>
      <ListTitle />

      <FlatList
        data={data}
        keyExtractor={item => `${item.baseForm}`}
        renderItem={({ item }) => (<Item {...item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
});
