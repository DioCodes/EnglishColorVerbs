import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {AppHeaderIcon} from './AppHeaderIcon';
import theme from '../theme';
import {Platform} from 'react-native';

const Header = ({navigation}) => {
  return (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        iconName="ios-close"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </HeaderButtons>
  );
};

export const ModalHeader = (navigation, header = '', icon) => ({
  headerShown: true,
  headerTitle: header,
  headerLeft: () => {},
  headerRight: () => <Header navigation={navigation} />,
  headerStatusBarHeight: 0,
  headerStyle: {
    backgroundColor:
      Platform.OS === 'android' ? theme.PRIMARY_COLOR : theme.SECONDARY_COLOR,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
    // borderBottomColor: 'rgba(0, 0 , 0, .05)',
  },
});
