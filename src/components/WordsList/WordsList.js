import React from 'react';
import {StyleSheet, View, Text, Platform, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import theme from '../../theme';
import {Word} from './Word';

export const WordsList = () => {
  return (
    <View style={styles.main}>
      <View style={styles.headersContainer}>
        <Text style={styles.header}>Infinitive</Text>
        <Text style={styles.header}>Past Simp.</Text>
        <Text style={styles.header}>Past Part.</Text>
      </View>

      {/* <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Word />
      </ScrollView> */}
      <FlatList
        data={DATA}
        renderItem={Word}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const DATA = [
  {
    id: 's1',
    word1: 'Abide',
    word2: 'Abode',
    word3: 'Abode',
    translate: 'Терпеть, соблюдать, пребывать',
  },
  {
    id: 's2',
    word1: 'Arise',
    word2: 'Arose',
    word3: 'Arosen',
    translate: 'Возникать, подниматься',
  },
  {
    id: 's3',
    word1: 'Awake',
    word2: 'Awoke',
    word3: 'Awoken',
    translate: 'Будить, просыпаться',
  },
  {
    id: 's4',
    word1: 'Be',
    word2: 'Was, Were',
    word3: 'Been',
    translate: 'Быть',
  },
];

const styles = StyleSheet.create({
  main: {
    width: '100%',
    // height: '100%',
    flex: 1,
  },
  headersContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
    fontSize: 18,
  },
});
