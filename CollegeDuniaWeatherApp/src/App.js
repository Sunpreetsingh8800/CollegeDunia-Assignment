import React, {Component} from 'react';
import {View, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {RootStack} from './Routes';
import NetInfo from '@react-native-community/netinfo';
import {store} from './store';
import {persistStore} from 'redux-persist';
import NetworkContext from './utils/networkContext';

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
          <View style={{flex: 1}}>
            <RootStack />
          </View>
        </NetworkContext.Provider>
      </Provider>
    );
  }
}

export default App;
