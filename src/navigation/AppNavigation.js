import React from 'react';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackActions} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from '../screens/HomeScreen';
import {PracticeScreen} from '../screens/PracticeScreen';
import {ExamScreen} from '../screens/ExamScreen';
import theme from '../theme';
import {Platform, StatusBar} from 'react-native';
import CardsScreen from '../screens/CardsScreen';
import SettingsScreen from '../screens/SettingsScreen';

export const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const PracticeStack = createStackNavigator();
  const ExamStack = createStackNavigator();

  const screenSettings = {
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? theme.PRIMARY_COLOR : theme.SECONDARY_COLOR,
    },
    headerBackTitleVisible: false,
    headerTintColor:
      Platform.OS === 'android' ? theme.SECONDARY_COLOR : theme.PRIMARY_COLOR,
  };

  const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{...screenSettings}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
  const PracticeStackScreen = () => (
    <PracticeStack.Navigator screenOptions={{...screenSettings}}>
      <PracticeStack.Screen name="Practice" component={PracticeScreen} />
    </PracticeStack.Navigator>
  );
  const ExamStackScreen = () => (
    <ExamStack.Navigator screenOptions={{...screenSettings}}>
      <ExamStack.Screen name="Exam" component={ExamScreen} />
    </ExamStack.Navigator>
  );

  const HomeTabNavigator = () => (
    <Tab.Navigator
      initialRouteName="TabHome"
      tabBarOptions={{
        activeTintColor:
          Platform.OS === 'android'
            ? theme.SECONDARY_COLOR
            : theme.PRIMARY_COLOR,
        inactiveTintColor:
          Platform.OS === 'android' ? 'rgba(255, 255, 255, .5)' : 'grey',
        style: {
          backgroundColor:
            Platform.OS === 'android'
              ? theme.PRIMARY_COLOR
              : theme.SECONDARY_COLOR,
        },
      }}>
      <Tab.Screen
        name="TabHome"
        component={HomeStackScreen}
        options={{
          title: 'Главная',
          tabBarLabel: 'Главная',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabPractice"
        component={PracticeStackScreen}
        options={{
          title: 'Практика',
          tabBarLabel: 'Практика',
          tabBarIcon: ({color}) => (
            <Icon name="ios-flame" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabExam"
        component={ExamStackScreen}
        options={{
          title: 'Экзамен',
          tabBarLabel: 'Экзамен',
          tabBarIcon: ({color}) => (
            <Icon name="ios-list" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  const DrawerNavigator = () => (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => {
        const pushToCards = StackActions.push('Cards');
        const pushToSettings = StackActions.push('Settings');
        return (
          <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
              label="Cards"
              onPress={() => {
                props.navigation.dispatch(DrawerActions.closeDrawer());
                props.navigation.dispatch(pushToCards);
              }}
            />
            <DrawerItem
              label="Settings"
              onPress={() => {
                props.navigation.dispatch(DrawerActions.closeDrawer());
                props.navigation.dispatch(pushToSettings);
              }}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Main" component={MainStackNavigator} />
    </Drawer.Navigator>
  );

  const MainStackNavigator = () => (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...screenSettings,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <DrawerNavigator />
    </NavigationContainer>
  );
};
