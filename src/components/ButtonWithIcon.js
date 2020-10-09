import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ButtonWithIcon = ({
  name = 'ios-alert',
  size = 30,
  color = 'black',
  pressHandler,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => pressHandler()}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
