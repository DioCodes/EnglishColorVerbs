import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Verb = ({verb, onOpen}) => {
  return (
    <TouchableOpacity
      style={styles.main}
      activeOpacity={0.7}
      onPress={() => onOpen(verb)}>
      <View style={styles.verbContainer}>
        <Text style={styles.verb}>{verb.word1}</Text>
        <Text style={styles.verb}>{verb.word2}</Text>
        <Text style={styles.verb}>{verb.word3}</Text>
      </View>
      <Text style={styles.verbTranslate}>{verb.translate}</Text>
    </TouchableOpacity>
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
