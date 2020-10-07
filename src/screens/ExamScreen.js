import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../theme';

export const ExamScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Экзамен',
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
