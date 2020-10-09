import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Word = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.verbContainer}>
        <Text style={styles.verb}>{item.word1}</Text>
        <Text style={styles.verb}>{item.word2}</Text>
        <Text style={styles.verb}>{item.word3}</Text>
      </View>
      <Text style={styles.verbTranslate}>{item.translate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: '100%',
  },
  verbContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verb: {
    fontSize: 16,
  },
  verbTranslate: {
    marginBottom: 10,
    fontSize: 14,
    opacity: 0.5,
  },
});
