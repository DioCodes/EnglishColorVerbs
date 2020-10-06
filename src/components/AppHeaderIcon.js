import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import theme from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={26}
    IconComponent={Icon}
    color={theme.SECONDARY_COLOR}
  />
);
