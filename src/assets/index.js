import "./svg";

export default (time, rain, clouds, temp) => {
  const icons = {};
  switch (temp) {
    case temp >= 15:
      icons = { ...icons, therm: "#thermometer-hot" };
      break;
    case temp < 15:
      icons = { ...icons, therm: "#thermometer-cold" };
    default:
      break;
  }
  switch (main) {
    case "Clouds":
      return "a";
  }
};
