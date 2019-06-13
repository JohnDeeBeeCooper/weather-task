export default time => {
  const date = new Date(time * 1000);
  const hours = date.getUTCHours();
  return hours >= 6 && hours < 21 ? true : false;
};
