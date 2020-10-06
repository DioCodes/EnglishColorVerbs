import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from '../screens/HomeScreen';
import {PracticeScreen} from '../screens/PracticeScreen';
import {ExamScreen} from '../screens/ExamScreen';
import theme from '../theme';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  const HomeStack = createStackNavigator();
  const PracticeStack = createStackNavigator();
  const ExamStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStackNavigator = () => {
    return (
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Navigator>
    );
  };

  const PracticeStackNavigator = () => {
    return (
      <PracticeStack.Navigator
        initialRouteName="Practice"
        screenOptions={{
          headerShown: true,
        }}>
        <PracticeStack.Screen name="Practice" component={PracticeScreen} />
      </PracticeStack.Navigator>
    );
  };

  const ExamStackNavigator = () => {
    return (
      <ExamStack.Navigator
        initialRouteName="Exam"
        screenOptions={{
          headerShown: true,
        }}>
        <ExamStack.Screen name="Exam" component={ExamScreen} />
      </ExamStack.Navigator>
    );
  };

  const HomeTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          activeTintColor: theme.SECONDARY_COLOR,
        }}>
        <Tab.Screen
          name="home"
          component={HomeStackNavigator}
          options={{
            title: 'Главная',
            tabBarLabel: 'Главная',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="practice"
          component={PracticeStackNavigator}
          options={{
            title: 'Практика',
            tabBarLabel: 'Практика',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-flame" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="exam"
          component={ExamStackNavigator}
          options={{
            title: 'Экзамен',
            tabBarLabel: 'Экзамен',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-list" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerBackTitle: 'Back',
          headerTintColor: '#000',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <MainStack />
    </NavigationContainer>
  );
};
