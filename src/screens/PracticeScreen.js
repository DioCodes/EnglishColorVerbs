import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../theme';

export const PracticeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Практика',
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
