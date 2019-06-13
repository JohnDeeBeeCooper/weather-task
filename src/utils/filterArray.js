import windDirection from "./windDirection";
import isDay from "./isDay";
import timeCorrection from "./timeCorrection";

export default arr => {
  const res = arr.reduce((acc, item) => {
    const isNight = !isDay(item.dt);
    const date = new Date(item.dt * 1000);
    const hours = timeCorrection(date.getUTCHours());
    const minutes = timeCorrection(date.getUTCMinutes());
    const obj = {
      temp: item.main.temp,
      wind: {
        speed: item.wind.speed,
        direction: windDirection(item.wind.deg)
      },
      time: `${hours}:${minutes}`
    };
    const newAcc = [...acc, obj];
    return newAcc;
  }, []);
  return res;
};
