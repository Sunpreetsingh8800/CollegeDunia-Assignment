import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {weatherUtils} from '../../utils/weatherUtils';
import {dynamicSize} from '../../utils/dimension.style';

export const ForecastView = ({dailyData}) => {
  return (
    <View style={styles.bottomContainer}>
      {dailyData &&
        dailyData.map((item, index) => {
          const dailyDate = weatherUtils.dailyDayName(index);
          return (
            <View style={styles.textWrapper}>
              {dailyDate && <Text style={styles.dateText}>{dailyDate}</Text>}
              {item && item.temp && (
                <Text style={styles.dateText}>{item.temp.day}</Text>
              )}
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: dynamicSize(16),
    fontWeight: 'normal',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: dynamicSize(40),
  },
  textWrapper: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#000',
    justifyContent: 'space-between',
    paddingVertical: dynamicSize(10),
    paddingHorizontal: dynamicSize(18),
  },
});
