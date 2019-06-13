import getWeekDay from "./getWeekDay";
import filterArray from "./filterArray";

const getNumDay = date => {
  const newDate = new Date(date * 1000);
  return newDate.getUTCDate();
};

export default arr => {
  let newArr = [];
  let day = getNumDay(arr[0].dt);
  let i = 0;
  let j = 0;
  while (j++ < arr.length - 1) {
    const numDay = getNumDay(arr[j].dt);
    console.log(arr[j]);
    if (numDay !== day) {
      const newDate = new Date(arr[j].dt * 1000);
      const { weekDay, monthDay } = getWeekDay(day, newDate.getUTCMonth());
      const preArr = arr.slice(i, j);
      const weather = filterArray(preArr);
      newArr = [...newArr, { weekDay, monthDay, day, weather }];
      i = j;
      day = numDay;
    }
  }
  return newArr;
};
