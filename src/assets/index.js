import "./svg";

export default (isNight, rain, clouds, temp) => {
  const tmOfDay = isNight ? "night" : "day";
  const icons = {};
  icons.therm = temp >= 15 ? "thermometer-hot" : "thermometer-cold";
  let rainPoint = null;
  if (rain) {
    rainPoint = Math.floor(+rain["3h"]);
  }
  let cloudPoint = null;
  if (clouds) {
    cloudPoint = Math.floor(+clouds.all / 24);
  }
  if (rainPoint !== null) {
    icons.icon =
      cloudPoint >= 2 || isNight
        ? `rainy-${rainPoint}`
        : `rainy-sun${rainPoint}`;
  } else {
    if (cloudPoint === 4) {
      return { ...icons, icon: "cloudy" };
    }
    icons.icon =
      cloudPoint !== null ? `cloudy-${tmOfDay}-${cloudPoint}` : `${tmOfDay}`;
  }
  return icons;
};
