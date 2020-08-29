import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {dynamicSize} from '../../utils/dimension.style';
import loadingJson from '../../animations/226-splashy-loader.json';

export const LoadingView = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadingJson}
        loop={true}
        autoPlay={true}
        style={styles.lottieContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieContainer: {
    height: dynamicSize(220),
    width: dynamicSize(220),
  },
});
