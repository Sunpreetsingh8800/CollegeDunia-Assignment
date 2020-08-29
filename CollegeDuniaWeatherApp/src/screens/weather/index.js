import React, {Component, Fragment} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {weatherOperations} from '../../api/weatherOperations';
import {ForecastView} from '../../components/forecastView';
import {LoadingView} from '../../components/LoadingView';
import NetworkContext from '../../utils/networkContext';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
      dailyData: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = async () => {
    this.setState({loading: true});
    try {
      const {data} = await weatherOperations.getCurrentWeather();
      this.setState({loading: false});
      // Current Weather
      const currentData = data && data.current;
      // 5 day Forecast weather
      const dailyData = data && data.daily.splice(3, 7);
      if (dailyData && currentData) {
        this.setState({currentData, dailyData});
      }
    } catch (error) {
      // Error handle
      this.setState({loading: false});
      this.setState({error: true});
    }
  };

  renderView() {
    // handle Network
    const hasNetwork =
      NetworkContext &&
      NetworkContext._currentValue &&
      NetworkContext._currentValue.isInternetReaachable;
    const {currentData, dailyData, loading, error} = this.state;
    // Render screen as per loading and error
    // If network is off it will show something went wrong
    if (loading) {
      return <LoadingView />;
    } else if (error || !hasNetwork) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.retryTextWrapper}>
            Something went wrong at our end
          </Text>
          <TouchableOpacity
            style={styles.retryText}
            onPress={this.getWeatherData}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Fragment>
          <TodayWeatherView currentData={currentData} />
          <ForecastView dailyData={dailyData} />
        </Fragment>
      );
    }
  }

  render() {
    return (
      // Used SafeAreaView for notch display
      <SafeAreaView style={styles.container}>{this.renderView()}</SafeAreaView>
    );
  }
}

const TodayWeatherView = ({currentData}) => {
  return (
    <View style={styles.innerContainer}>
      {currentData && (
        <Text style={[styles.titleText, styles.boldText]}>
          {currentData.temp}
        </Text>
      )}
      <Text style={styles.titleText}>Delhi</Text>
    </View>
  );
};

export default Weather;
