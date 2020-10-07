import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import theme from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={26}
    IconComponent={Icon}
    color={
      Platform.OS === 'android' ? theme.SECONDARY_COLOR : theme.PRIMARY_COLOR
    }
  />
);
