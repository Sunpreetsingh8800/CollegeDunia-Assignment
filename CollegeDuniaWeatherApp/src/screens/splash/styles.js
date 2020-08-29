import {StyleSheet} from 'react-native';
import {dynamicSize} from '../../utils/dimension.style';

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  dotIcon: {
    width: dynamicSize(200),
    height: dynamicSize(113.8),
    alignContent: 'center',
  },
  welcomeText: {
    fontSize: dynamicSize(32),
  },
});
