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
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: dynamicSize(38),
  },
  boldText: {
    fontWeight: 'bold',
  },
  dotIcon: {
    width: dynamicSize(200),
    height: dynamicSize(113.8),
    alignContent: 'center',
  },
});
