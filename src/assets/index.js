import "./svg";

export default (isNight, rain, clouds, temp) => {
  const tmOfDay = isNight ? "night" : "day";
  const icons = {};
  switch (true) {
    case temp >= 20:
      icons.therm = "thermometer-hot";
      break;
    case temp >= 5:
      icons.therm = "thermometer-avg";
      break;
    case temp < 5:
      icons.therm = "thermometer-cold";
      break;
    default:
      console.log("err: " + temp);
      break;
  }
  let rainPoint = null;
  if (rain) {
    rainPoint = Math.ceil(rain["3h"]);
  }
  let cloudPoint = null;
  if (clouds) {
    cloudPoint = Math.ceil(clouds.all / 24);
  }
  if (rainPoint) {
    if (rainPoint >= 4) {
      return { ...icons, icon: "thunder" };
    }
    icons.icon =
      cloudPoint >= 2 || isNight
        ? `rainy-${rainPoint}`
        : `rainy-sun${rainPoint}`;
  } else {
    if (cloudPoint >= 4) {
      return { ...icons, icon: "cloudy" };
    }
    icons.icon = cloudPoint ? `cloudy-${tmOfDay}-${cloudPoint}` : `${tmOfDay}`;
  }
  return icons;
};
