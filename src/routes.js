import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Main from '~/pages/Main';
import List from '~/pages/List';
import Quiz from '~/pages/Quiz';
import Result from '~/pages/Result';

const homeQuiz = createStackNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Quiz: {
      screen: props => <Quiz {...props} />,
      navigationOptions: {
        title: 'Quiz',
      },
    },
    Result: {
      screen: props => <Result {...props} />,
      navigationOptions: {
        title: 'Result',
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const MenuRoutes = {
  Main: {
    screen: homeQuiz,
    navigationOptions: {
      title: 'início',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={18} color={tintColor} />,
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      title: 'lista',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={18} color={tintColor} />,
    },
  },
};

const MenuConfig = {
  initialRouteName: 'Main',
  tabBarOptions: {
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#08f',
    activeTintColor: '#08f',
    inactiveTintColor: '#fff',
  },
};

const Routes = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig));

export default Routes;
