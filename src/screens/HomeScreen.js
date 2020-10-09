import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {Verb} from '../components/Verb';
import {DATA} from '../data';
import theme from '../theme';

export const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Color Verbs',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            // title="Breath Info"
            iconName="ios-menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            iconName="ios-search"
            onPress={() => {
              // navigation.push('');
            }}
          />
          <Item
            iconName="ios-heart"
            onPress={() => {
              // navigation.push('');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const openVerbHandler = (verb) => {
    navigation.push('Verb', {
      verbId: verb.id,
      verb1: verb.word1,
      verb2: verb.word2,
      verb3: verb.word3,
      verbTranslate: verb.translate,
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.main}>
        <View style={styles.headersContainer}>
          <Text style={styles.header}>Infinitive</Text>
          <Text style={styles.header}>Past Simp.</Text>
          <Text style={styles.header}>Past Part.</Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={({item}) => <Verb verb={item} onOpen={openVerbHandler} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
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
