import windDirection from "./windDirection";
import isDay from "./isDay";
import timeCorrection from "./timeCorrection";
import getSvgName from "../assets/";

export default arr => {
  const res = arr.reduce((acc, item) => {
    const isNight = !isDay(item.dt);
    const date = new Date(item.dt * 1000);
    const hours = timeCorrection(date.getUTCHours());
    const minutes = timeCorrection(date.getUTCMinutes());
    const temp = Math.round(item.main.temp - 273.15);
    const obj = {
      temp: temp,
      wind: {
        speed: item.wind.speed,
        direction: windDirection(item.wind.deg)
      },
      time: `${hours}:${minutes}`,
      icons: getSvgName(isNight, item.rain, item.clouds, temp),
      desc: item.weather[0].description
    };
    const newAcc = [...acc, obj];
    return newAcc;
  }, []);
  return res;
};
