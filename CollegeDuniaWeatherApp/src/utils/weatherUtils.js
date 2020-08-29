export const weatherUtils = {
  dailyDayName: (dailyDateIndex) => {
    var allDays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    var dayName = allDays[dailyDateIndex]; // It will give day index, and based on index we can get day name from the array.
    return dayName;
  },
};
