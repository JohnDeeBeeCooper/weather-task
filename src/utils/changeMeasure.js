export default (mes, tran) => {
  switch (tran) {
    case "F":
      return Math.round(mes + 273);
    case "C":
      return Math.round(mes - 273);
    default:
      console.log("err: " + tran);
      return mes;
  }
};
