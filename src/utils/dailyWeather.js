export default arr => {
  const tempArr = arr.map(item => item.temp);
  const minTemp = Math.min(...tempArr);
  const maxTemp = Math.max(...tempArr);
  console.log(minTemp, maxTemp);
};
