import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonWithIcon} from '../components/ButtonWithIcon';
import {ModalHeader} from '../components/ModalHeader';
import theme from '../theme';

export const VerbScreen = ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions(ModalHeader(navigation));
  }, [navigation]);

  const {verbId, verbTranslate, verb1, verb2, verb3} = route.params;

  const onPressHandler = () => {
    console.log('ButtonWithIcon PRESSED!');
  };

  const Verb = ({verb}) => (
    <TouchableOpacity activeOpacity={0.6}>
      <Text style={{...styles.text, ...styles.verbText}}>{verb}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.verbsContainer}>
          <Verb verb={verb1} />
          <Verb verb={verb2} />
          <Verb verb={verb3} />
        </View>
        <Text style={{...styles.text, ...styles.textDescription}}>
          нажмите чтобы слушать
        </Text>
      </View>
      <Text style={{...styles.text, ...styles.textTranslate}}>
        {verbTranslate}
      </Text>

      <View style={{...styles.container, ...styles.detailContainer}}>
        <Text style={{...styles.text, ...styles.detailHeader}}>
          Определение:
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  verbsContainer: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  text: {
    color: theme.TERTIARY_COLOR,
    fontFamily: 'Helvetica',
    fontWeight: '300',
  },
  verbText: {
    fontSize: 22,
    fontWeight: 'normal',
    color: theme.PRIMARY_COLOR,
  },
  textTranslate: {
    fontSize: 18,
  },
  textDescription: {
    fontSize: 14,
    opacity: 0.5,
  },
  detailContainer: {
    marginTop: 30,
  },
  detailHeader: {
    fontSize: 18,
    fontWeight: 'normal',
    color: theme.PRIMARY_COLOR,
  },
  detailText: {},
});
