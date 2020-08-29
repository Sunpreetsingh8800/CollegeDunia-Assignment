import React, {Component} from 'react';
import {View, LogBox, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {RootStack} from './Routes';
import NetInfo from '@react-native-community/netinfo';
import {store} from './store';
import {persistStore} from 'redux-persist';
import NetworkContext from './utils/networkContext';
import GetLocation from 'react-native-get-location';
import {setCurrentPosition} from './actions/actions';

persistStore(store);

LogBox.ignoreAllLogs(true);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInternetReaachable: false,
    };
  }

  componentDidMount = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        store.dispatch(setCurrentPosition(location));
      })
      .catch((error) => {
        const {message} = error;
        console.warn(message);
      });
    NetInfo.addEventListener((state) => {
      this.setState({
        isInternetReaachable: state.isInternetReachable || false,
      });
    });
  };

  render() {
    const {isInternetReaachable} = this.state;
    return (
      <Provider store={store}>
        <NetworkContext.Provider
          value={{
            isInternetReaachable,
          }}>
          <View style={styles.container}>
            <RootStack />
          </View>
        </NetworkContext.Provider>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
