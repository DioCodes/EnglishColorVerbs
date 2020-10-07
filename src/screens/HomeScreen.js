import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
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
            // title="Breath Info"
            iconName="ios-search"
            onPress={() => {
              // navigation.push('');
            }}
          />
          <Item
            // title="Breath Info"
            iconName="ios-heart"
            // iconName="ios-heart-outline"
            onPress={() => {
              // navigation.push('');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
