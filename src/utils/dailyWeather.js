import getIcon from "../assets/";

export default arr => {
  const tempArr = arr.map(item => item.temp);
  const minTemp = Math.min(...tempArr);
  const maxTemp = Math.max(...tempArr);
  const { main, point } = arr[Math.ceil((arr.length - 1) / 2)];
  const icons =
    main === "Rain"
      ? getIcon(false, { ["3h"]: point }, null, minTemp)
      : getIcon(false, null, { all: point }, minTemp);
  return { minTemp, maxTemp, icons };
};
