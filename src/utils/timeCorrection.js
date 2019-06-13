export default num => {
  const newNum = num.toString();
  return newNum.length === 1 ? "0" + newNum : newNum;
};
