export default (mes, tran) => {
  switch (tran) {
    case "C":
      return Math.round(mes * (9 / 5) + 32);
    case "F":
      return Math.round((mes - 32) * (5 / 9));
    default:
      console.log("err: " + tran);
      return mes;
  }
};
