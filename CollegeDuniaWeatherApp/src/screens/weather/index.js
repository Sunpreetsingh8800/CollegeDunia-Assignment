import React, {Component, Fragment} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {weatherOperations} from '../../api/weatherOperations';
import {ForecastView} from '../../components/forecastView';
import {LoadingView} from '../../components/LoadingView';

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
      console.log(data, ':::data');
      this.setState({loading: false});
      const currentData = data && data.current;
      const dailyData = data && data.daily.splice(3, 7);
      if (dailyData && currentData) {
        this.setState({currentData, dailyData});
      }
    } catch (error) {
      this.setState({loading: false});
      this.setState({error: true});
    }
  };

  renderView() {
    const {currentData, dailyData, loading, error} = this.state;
    if (loading) {
      return <LoadingView />;
    } else if (error) {
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
