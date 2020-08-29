import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import RouteNames from '../../RouteNames';

class Splash extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.checkTokenExist();
    }, 1000);
  }

  checkTokenExist = () => {
    // TODO: REMOVE THIS TOKEN WITH YOUR LOGIN JWT TOKEN
    const hasToken = 123;
    if (hasToken) {
      this.props.navigation.navigate(RouteNames.Weather);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.welcomeText}>Welcome to </Text>
          <Text style={styles.welcomeText}>College dunia </Text>
          <Text style={styles.welcomeText}>Assignment </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
