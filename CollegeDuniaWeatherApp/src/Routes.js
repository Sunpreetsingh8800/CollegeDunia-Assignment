import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './screens/splash/index';
import Weather from './screens/weather/index';
import RouteNames from './RouteNames';

const createDefaultStackNavigator = (screensObject) =>
  createStackNavigator(screensObject, {
    headerMode: 'none',
    tabBarVisible: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  });

const AuthStack = createDefaultStackNavigator({
  [RouteNames.Weather]: {screen: Weather},
});

export const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      [RouteNames.Splash]: {screen: Splash},
      [RouteNames.AuthStack]: {screen: AuthStack},
    },
    {
      headerMode: 'none',
    },
  ),
);

class Nav extends React.Component {
  render() {
    return (
      <RootStack
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.isNewMessageAvailable,
        })}
      />
    );
  }
}
