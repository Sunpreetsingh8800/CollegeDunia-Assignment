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
  errorContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryText: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: dynamicSize(30),
    paddingVertical: dynamicSize(10),
    marginTop: dynamicSize(80),
  },
  retryTextWrapper: {
    fontSize: 50,
    fontWeight: 'normal',
    marginLeft: dynamicSize(30),
    marginRight: dynamicSize(100),
  },
  retryButtonText: {
    fontSize: 16,
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
